import axios from "axios";
import { useAuthStore } from "../zustand/AuthStore";
import { router } from "../router";

const HttpAuthService = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: { "Content-Type": "application/json" },
});

/**
 * Token Refresh Interceptor
 * --------------------------
 * 1. Every request attaches the access token from Zustand store.
 * 2. On a 401 response:
 *    - If no refresh is already in progress, start a new refresh request.
 *    - If a refresh is already running, wait for it to complete.
 *    - Once the new token is obtained, retry the original request.
 *    - If refresh fails, clear auth state and redirect to login.
 */

// Request interceptor: attach token
HttpAuthService.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Variable to hold the current refresh promise (if any)
let refreshPromise: Promise<string> | null = null;

HttpAuthService.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            // If a refresh is already in progress, wait for it and use the result
            if (refreshPromise) {
                try {
                    const newAccess = await refreshPromise;
                    originalRequest.headers.Authorization = `Bearer ${newAccess}`;
                    return HttpAuthService(originalRequest);
                } catch {
                    // Refresh failed – logout
                    return Promise.reject(error);
                }
            }

            // No ongoing refresh → start a new one
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem("AuthRefresh");

            if (!refreshToken) {
                useAuthStore.getState().logout();
                router.navigate("/login", { replace: true });
                return Promise.reject(error);
            }

            // Create the refresh promise and store it
            refreshPromise = axios
                .post("http://127.0.0.1:8000/api/auth/refresh/", {
                    refresh: refreshToken,
                })
                .then(({ data }) => {
                    const newAccess = data.access;
                    useAuthStore.getState().setToken(newAccess);
                    if (data.refresh) {
                        localStorage.setItem("AuthRefresh", data.refresh);
                    }
                    return newAccess; // resolve with new access token
                });

            try {
                const newAccess = await refreshPromise;
                originalRequest.headers.Authorization = `Bearer ${newAccess}`;
                return HttpAuthService(originalRequest);
            } catch {
                // Refresh failed – clear everything and redirect
                useAuthStore.getState().logout();
                router.navigate("/login", { replace: true });
                return Promise.reject(error);
            } finally {
                // Clear the promise so subsequent 401s can start a new refresh
                refreshPromise = null;
            }
        }

        return Promise.reject(error);
    },
);

export default HttpAuthService;
