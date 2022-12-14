import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "@app/Pages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Pages.Login />} />
                    <Route
                        path="/home"
                        element={
                            <Pages.ProtectedRoutes redirectTo={"/"}>
                                <Pages.Home />
                            </Pages.ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/list"
                        element={
                            <Pages.ProtectedRoutes redirectTo={"/"}>
                                <Pages.List />
                            </Pages.ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/profil"
                        element={
                            <Pages.ProtectedRoutes redirectTo={"/"}>
                                <Pages.Profil />
                            </Pages.ProtectedRoutes>
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <Pages.AdminProtectedRoutes redirectTo={"/home"}>
                                <Pages.AddUser />
                            </Pages.AdminProtectedRoutes>
                        }
                    />
                    <Route
                        path="/modify/:id"
                        element={
                            <Pages.AdminProtectedRoutes redirectTo={"/home"}>
                                <Pages.ModifyUser />
                            </Pages.AdminProtectedRoutes>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
