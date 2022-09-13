import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "@app/Pages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Pages.Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
