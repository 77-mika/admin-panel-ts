import { create } from "zustand";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    isCheckingAuth: boolean;
    setToken: (token: string | null) => void;
    logout: () => void;
    setCheckingAuth: (checking: boolean) => void;
}

// Helper to sync with localStorage on every state change
const persistToken = (token: string | null) => {
    if (token) {
        localStorage.setItem("AuthToken", token);
    } else {
        localStorage.removeItem("AuthToken");
        localStorage.removeItem("AuthRefresh");
    }
};

export const useAuthStore = create<AuthState>((set) => ({
    // Initial state from localStorage (only on first load)
    token: localStorage.getItem("AuthToken"),
    isAuthenticated: !!localStorage.getItem("AuthToken"),
    isCheckingAuth:true,

    setToken: (token) => {
        persistToken(token);
        set({ token, isAuthenticated: !!token });
    },

    logout: () => {
        persistToken(null);
        set({ token: null, isAuthenticated: false });
    },
    setCheckingAuth:(checking)=> set({isCheckingAuth:checking})
}));

// Listen to cross‑tab changes
window.addEventListener("storage", (event) => {
    if (event.key === "AuthToken") {
        if (!event.newValue) {
            // Token removed in another tab → log out this tab
            useAuthStore.getState().logout();
        } else if (event.newValue !== event.oldValue) {
            // Token changed in another tab → update our store
            useAuthStore.getState().setToken(event.newValue);
        }
    }
});
