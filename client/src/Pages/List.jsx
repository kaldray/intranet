import React, { useEffect, useState } from "react";

import { Layout } from "@app/Components";
import { getAllCollaborater } from "@app/Services";
import { Card } from "@app/Components/Card";

import { list__container } from "@app/Sass/Pages/List.module.scss";

export const List = () => {
    const [collaboraters, setCollaboraters] = useState();

    useEffect(() => {
        async function fetchCollaborators() {
            const data = await getAllCollaborater();
            setCollaboraters(data);
        }
        fetchCollaborators();
    }, []);

    return (
        <>
            <Layout>
                <div className={list__container}>
                    {collaboraters && collaboraters.map((c) => <Card key={c.id} {...c} />)}
                </div>
            </Layout>
        </>
    );
};
