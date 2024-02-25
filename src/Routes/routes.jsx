import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRouted from "./ProtectedRouted";

export const routeList = [
    {
        path: "/",
        element: (
            <ProtectedRouted>
                <Home />
            </ProtectedRouted>
        )
    },
    {
        path: "/menu",
        element: (
            <ProtectedRouted>
                <Menu />
            </ProtectedRouted>
        ),
    },
    {
        path: "/menu/:id",
        element:(
            <ProtectedRouted>
                <MenuDetail />,
            </ProtectedRouted>
        )
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },

];