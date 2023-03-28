import React from "react";

const Login = React.lazy(() => import("../apps/auth/login/Login"));
const Main = React.lazy(() => import("../apps/layout/main/Main"));

export const AuthPages = {
    Login
}

export const LayoutPages = {
    Main
}