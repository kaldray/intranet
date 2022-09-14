import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as List } from "@app/assets/list.svg";
import { ReactComponent as LogOut } from "@app/assets/logout.svg";
import { nav__container, button, navigation } from "@app/Sass/Components/Nav.module.scss";
import { getLocalStorage } from "@app/Services";

export const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const { user } = useSelector((state) => state.user);
    const btn = useRef();
    const token = getLocalStorage("token");

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
                        {token !== null && (
                            <ul>
                                <li>
                                    <List width={30} />
                                    <Link to={"/list"}>Liste</Link>
                                </li>
                                <li>
                                    <img src={user?.photo} alt="profil" />
                                    <Link to={"/profil"}>Profile</Link>
                                </li>
                                <li>
                                    <LogOut width={30} />
                                    <Link to={"/"}>LogOut</Link>
                                </li>
                            </ul>
                        )}
                    </nav>
                )}
            </div>
        </>
    );
};
