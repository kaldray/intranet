import React from "react";
import { useLocation } from "react-router-dom";

import {
    img__container,
    card__container,
    localisation,
    description
} from "@app/Sass/Components/Card.module.scss";

export const Card = ({ photo, firstname, lastname, country, city, phone, email, birthdate }) => {
    const location = useLocation();
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
            </div>
        </>
    );
};
