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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
