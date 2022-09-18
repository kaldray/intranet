import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterCollaboraters } from "@app/Redux/reducers/collaboratersReducer";
import { setModifyUser } from "@app/Redux/reducers/userReducer";

import {
    img__container,
    card__container,
    localisation,
    description,
    admin
} from "@app/Sass/Components/Card.module.scss";
import { deleteUser, getSpecificCollaborater } from "@app/Services";

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
    const { currentUser } = useSelector((state) => state.user);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function adminDeleteUser() {
        try {
            const { status } = await deleteUser(id);
            if (status === 200) {
                dispatch(filterCollaboraters(id));
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function adminModifyUser() {
        try {
            const data = await getSpecificCollaborater(id);
            dispatch(setModifyUser(data));
            navigate(`/modify/${id}`);
        } catch (err) {
            console.log(err);
        }
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
                {currentUser.isAdmin === true && location.pathname === "/list" && (
                    <div className={admin}>
                        <button onClick={() => adminDeleteUser()}>Supprimer</button>
                        <button onClick={() => adminModifyUser()}>Modifier</button>
                    </div>
                )}
            </div>
        </>
    );
};
