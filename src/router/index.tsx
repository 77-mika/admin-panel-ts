import App from "../App";

import Dashboard from "../pages/dashboard/Dashboard";
import Groups from "../pages/groups/Groups";

import { createBrowserRouter } from "react-router-dom";
import ManagePr from "../pages/manage/ManagePr";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import AuthGuardSercive from "../Services/AuthGuardSercive";

export const router = createBrowserRouter([
    {
        element: <AuthGuardSercive />,
        children: [
            {
                path: "/",
                element: <App />,
                children: [
                    { index: true, element: <Dashboard /> },
                    { path: "groups", element: <Groups /> },
                    { path: "managepr", element: <ManagePr /> },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
