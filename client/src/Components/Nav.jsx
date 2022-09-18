import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const data = getLocalStorage("token");
    const navigate = useNavigate();

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

    function goToHome() {
        if (data?.token !== undefined) {
            navigate("/home");
        }
    }

    return (
        <>
            <div className={nav__container}>
                <h1 onClick={goToHome}>Mapple</h1>
                {data?.token !== undefined && (
                    <button ref={btn} className={button} onClick={switchToggleMenuHmab}>
                        <span></span>
                        <span></span>
                    </button>
                )}
                {data?.token !== undefined && (toggle || largeur > 560) && (
                    <nav className={navigation}>
                        {data?.token !== undefined && (
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
