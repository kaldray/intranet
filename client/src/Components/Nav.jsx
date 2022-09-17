import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as List } from "@app/assets/list.svg";
import { ReactComponent as LogOut } from "@app/assets/logout.svg";
import { ReactComponent as User } from "@app/assets/user.svg";
import { nav__container, button, navigation } from "@app/Sass/Components/Nav.module.scss";
import { getLocalStorage, removeFromLocalStorage } from "@app/Services";

export const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const { currentUser } = useSelector((state) => state.user);
    const btn = useRef();
    const token = getLocalStorage("token");
    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 560) setToggle(false);
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
                {token !== null && (
                    <button ref={btn} className={button} onClick={switchToggleMenuHmab}>
                        <span></span>
                        <span></span>
                    </button>
                )}
                {token !== null && (toggle || largeur > 560) && (
                    <nav className={navigation}>
                        {token !== null && (
                            <ul>
                                {currentUser.isAdmin === true && (
                                    <Link to={"/add"}>
                                        <User width={25} />
                                        <li>Ajouter</li>
                                    </Link>
                                )}
                                <Link to={"/profil"}>
                                    <img src={currentUser?.photo} alt="profil" />
                                    <li>Profile</li>
                                </Link>
                                <Link to={"/list"}>
                                    <List width={20} />
                                    <li>Liste</li>
                                </Link>
                                <Link onClick={() => removeFromLocalStorage("token")} to={"/"}>
                                    <LogOut width={20} />
                                    <li>LogOut</li>
                                </Link>
                            </ul>
                        )}
                    </nav>
                )}
            </div>
        </>
    );
};
