import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    img__container,
    card__container,
    localisation,
    description,
    admin
} from "@app/Sass/Components/Card.module.scss";
import { deleteUser } from "@app/Services";

export const Card = ({
    photo,
    firstname,
    lastname,
    country,
    city,
    phone,
    email,
    birthdate,
    service,
    id,
    newCollaborater
}) => {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();

    function adminDeleteUser() {
        deleteUser(id);
    }

    return (
        <>
            <div className={card__container}>
                <figure className={img__container}>
                    <img src={photo} alt="collaborateur" />
                    <figcaption>
                        {firstname} {lastname}
                    </figcaption>
                </figure>
                <div className={description}>
                    <p>{service}</p>
                    <a href={`tel:${phone}`}>{phone} </a>
                    <a href={`mailto:${email}`}>{email} </a>
                    <p>{birthdate}</p>
                    <div className={localisation}>
                        {city}, {country}
                    </div>
                </div>
                {location.pathname === "/home" && (
                    <button onClick={() => newCollaborater()}>Quelqu'un d'autre !</button>
                )}
                {user.isAdmin === true && (
                    <div className={admin}>
                        <button onClick={() => adminDeleteUser()}>Supprimer</button>
                        <Link to={`/modify/${id}`}>
                            <button>Modifier</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};
