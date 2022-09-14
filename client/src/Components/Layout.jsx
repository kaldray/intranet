import React from "react";

import { Nav } from ".";
import { container } from "@app/Sass/Components/Layout.module.scss";

export const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <section className={container}>{children}</section>
        </>
    );
};
