import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AdminProtectedRoutes = ({ children, redirectTo }) => {
    const { user } = useSelector((state) => state.user);
    return user?.isAdmin === true ? children : <Navigate to={redirectTo} />;
};
