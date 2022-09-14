import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { nav__container, button, navigation } from "@app/Sass/Components/Nav.module.scss";

export const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const btn = useRef();

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 480) setToggle(false);
        };
        window.addEventListener("resize", changeWidth);
        return () => window.removeEventListener("resize", changeWidth);
    }, []);

    function switchToggleMenuHmab() {
        setToggle(!toggle);
    }

    return (
        <>
            <div className={nav__container}>
                <h1>Mapple</h1>
                <button ref={btn} className={button} onClick={switchToggleMenuHmab}>
                    <span></span>
                    <span></span>
                </button>
                {(toggle || largeur > 480) && (
                    <nav className={navigation}>
                        <ul>
                            <li>
                                <Link to={"/"}>List</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Profile</Link>
                            </li>
                            <li>
                                <Link to={"/"}>LogOut</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
};
