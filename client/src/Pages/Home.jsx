import React, { useEffect, useState } from "react";

import { getRandomCollaborater } from "@app/Services";
import { Layout } from "@app/Components";

import { title__container } from "@app/Sass/Pages/Home.module.scss";
import { Card } from "@app/Components/Card";

export const Home = () => {
    const [info, setInfo] = useState();

    async function newCollaborater() {
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
        newCollaborater();
    }, []);

    return (
        <>
            <Layout>
                <div className={title__container}>
                    <h2>Bienvenue sur l'intranet de Mapple</h2>
                    <p>Faites connaisance avec vos collaborateurs</p>
                </div>
                {info && <Card {...info} />}
            </Layout>
        </>
    );
};
