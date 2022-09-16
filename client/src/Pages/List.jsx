import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    setCollaboraters,
    setFilteredCollaboraters
} from "@app/Redux/reducers/collaboratersReducer";

import { Layout } from "@app/Components";
import { getAllCollaborater } from "@app/Services";
import { Card } from "@app/Components/Card";

import {
    list__container,
    search__container,
    input__group,
    search__group
} from "@app/Sass/Pages/List.module.scss";

export const List = () => {
    const { register, handleSubmit } = useForm({ mode: "onChange" });
    const { collaboraters, filteredCollaboraters } = useSelector((state) => state.collaboraters);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchCollaborators() {
            const data = await getAllCollaborater();
            dispatch(setCollaboraters(data));
            dispatch(setFilteredCollaboraters(data));
        }
        fetchCollaborators();
    }, []);

    function updateList({ input, name, categorie }) {
        if (name === "name" && categorie === "Marketing") {
            const filterData = filteredCollaboraters.filter((val) => {
                return (
                    (val.firstname.toLowerCase().includes(input) ||
                        val.lastname.toLowerCase().includes(input)) &&
                    val.service === "Marketing"
                );
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "name" && categorie === "Technique") {
            const filterData = filteredCollaboraters.filter((val) => {
                return (
                    (val.firstname.toLowerCase().includes(input) ||
                        val.lastname.toLowerCase().includes(input)) &&
                    val.service === "Technique"
                );
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "name" && categorie === "Client") {
            const filterData = filteredCollaboraters.filter((val) => {
                return (
                    (val.firstname.toLowerCase().includes(input) ||
                        val.lastname.toLowerCase().includes(input)) &&
                    val.service === "Client"
                );
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "city" && categorie === "Client") {
            const filterData = filteredCollaboraters.filter((val) => {
                return val.city.toLowerCase().includes(input) && val.service === "Client";
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "city" && categorie === "Technique") {
            const filterData = filteredCollaboraters.filter((val) => {
                return val.city.toLowerCase().includes(input) && val.service === "Technique";
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "city" && categorie === "Marketing") {
            const filterData = filteredCollaboraters.filter((val) => {
                return val.city.toLowerCase().includes(input) && val.service === "Marketing";
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "city" && categorie === "All") {
            const filterData = filteredCollaboraters.filter((val) => {
                return val.city.toLowerCase().includes(input);
            });
            dispatch(setCollaboraters(filterData));
        }
        if (name === "name" && categorie === "All") {
            const filterData = filteredCollaboraters.filter((val) => {
                return (
                    val.firstname.toLowerCase().includes(input) ||
                    val.lastname.toLowerCase().includes(input)
                );
            });
            dispatch(setCollaboraters(filterData));
        }
    }

    return (
        <>
            <Layout>
                <div className={search__container}>
                    <form onChange={handleSubmit(updateList)}>
                        <div className={search__group}>
                            <div className={input__group}>
                                <label htmlFor="input">Trouver un collaborateur</label>
                                <input {...register("input")} type="search" name="input" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="name">Rechercher par nom ou ville</label>
                                <select {...register("name")} name="name">
                                    <option value="name">Nom</option>
                                    <option value="city">Ville</option>
                                </select>
                            </div>
                            <div className={input__group}>
                                <label htmlFor="categorie">Rechercher par service</label>
                                <select {...register("categorie")} name="categorie">
                                    <option value="All">Toutes</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Technique">Technique</option>
                                    <option value="Client">Client</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={list__container}>
                    {collaboraters && collaboraters.map((c) => <Card key={c.id} {...c} />)}
                </div>
            </Layout>
        </>
    );
};
