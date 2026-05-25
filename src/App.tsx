import { ToastContainer } from "react-toastify";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import useUiManagementStore from "./zustand/store";
import {  Outlet } from "react-router-dom";

const App = () => {
    const theme = useUiManagementStore((state) => state.theme);
    // const isAuthenticated = useAuthStore(
    //     (state) => state.isAuthenticated,
    // );
    // console.log(isAuthenticated);
    

    // if (!isAuthenticated) {
    //     return (
    //         <>
    //         <Navigate to={"login"} />
    //         <ToastContainer />
    //         </>
    //     );
    // }

    return (
        <div className={`${theme}`}>
            <Header />
            <Sidebar />
            <Outlet />
            <ToastContainer />
        </div>
    );
};
export default App;
