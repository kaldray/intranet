import React, { useEffect, useState } from "react";

import { getRandomCollaborater } from "@app/Services";
import { Layout } from "@app/Components";

import {
    img__container,
    card__container,
    title__container,
    location,
    description
} from "@app/Sass/Pages/Home.module.scss";

export const Home = () => {
    const [info, setInfo] = useState();

    async function collaborater() {
        const data = await getRandomCollaborater();
        const {
            id,
            gender,
            firstname,
            lastname,
            email,
            phone,
            birthdate,
            city,
            country,
            photo,
            service
        } = data;
        setInfo({
            id,
            gender,
            firstname,
            lastname,
            email,
            phone,
            birthdate,
            city,
            country,
            photo,
            service
        });
    }

    useEffect(() => {
        collaborater();
    }, []);

    return (
        <>
            <Layout>
                <div className={title__container}>
                    <h2>Bienvenue sur l'intranet de Mapple</h2>
                    <p>Faites connaisance avec vos collaborateurs</p>
                </div>
                <div className={card__container}>
                    <figure className={img__container}>
                        <img src={info?.photo} alt="collaborateur" />
                        <figcaption>
                            {info?.firstname} {info?.lastname}
                        </figcaption>
                    </figure>
                    <div className={description}>
                        <a href={`tel:${info?.phone}`}>{info?.phone} </a>
                        <a href={`mailto:${info?.mail}`}>{info?.email} </a>
                        <p>{info?.birthdate}</p>
                        <div className={location}>
                            {info?.city}, {info?.country}
                        </div>
                    </div>
                    <button onClick={() => collaborater()}>Quelqu'un d'autre !</button>
                </div>
            </Layout>
        </>
    );
};
