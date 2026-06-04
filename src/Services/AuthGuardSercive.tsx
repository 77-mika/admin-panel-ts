import { useEffect } from "react";
import { useAuthStore } from "../zustand/AuthStore";
import HttpAuthService from "./HttpAuthService";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuardSercive = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
    const logout = useAuthStore((state) => state.logout);
    const setCheckingAuth = useAuthStore((state) => state.setCheckingAuth);

    useEffect(() => {
        const verifyToken = async () => {
            setCheckingAuth(true);
            try {
                await HttpAuthService.get("auth/me");
            } catch (error) {
                console.log(error);
                
                logout();
            } finally {
                setCheckingAuth(false);
            }
        };

        if (isAuthenticated) {
            verifyToken();
        } else {
            setCheckingAuth(false);
        }
    }, []);

    if (isCheckingAuth) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500" />
            </div>
        );
    }
    if (!isAuthenticated){
        return <Navigate to={"/login"} replace />
    }

    return <Outlet/>;
};

export default AuthGuardSercive;
