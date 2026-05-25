import { useAuthStore } from "../zustand/AuthStore";
import HttpAuthService from "./HttpAuthService";

export interface LoginRequest {
    phone: number;
}
export interface VerifyOtpRequest {
    phone: number;
    otp: number;
}

export interface TokenResponse {
    access: string;
    refresh: string;
}

export const Authservice = {
    sendOtp: async (phone: number): Promise<void> => {
        await HttpAuthService.post("/auth/otp/request/", { phone_number : phone});
    },
    verifyOTP: async (phone: number, otp: string): Promise<TokenResponse> => {
        const response = await HttpAuthService.post<TokenResponse>(`/auth/otp/verify/`,{ phone_number:phone, otp });
        const {access,refresh} = response.data;

        useAuthStore.getState().setToken(access)
        localStorage.setItem(`AuthRefresh`,refresh);
        return response.data;
    },
    logout: (): void => {
        useAuthStore.getState().logout()
    },
};
