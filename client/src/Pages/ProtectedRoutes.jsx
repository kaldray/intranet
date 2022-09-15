import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = ({ children, redirectTo }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to={redirectTo} />;
};
