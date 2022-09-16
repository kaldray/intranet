import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AdminProtectedRoutes = ({ children, redirectTo }) => {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser?.isAdmin === true ? children : <Navigate to={redirectTo} />;
};
