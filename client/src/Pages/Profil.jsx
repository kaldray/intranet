import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@app/Redux/reducers/userReducer";

import { Layout } from "@app/Components";

import {
    input__group,
    form__container,
    form__group,
    form__profil
} from "@app/Sass/Pages/Profil.module.scss";
import { modifyProfil } from "@app/Services";

export const Profil = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm({});
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    async function submitFrom(values) {
        delete values.password2;
        if (values.password === "") {
            delete values.password;
        }
        try {
            const {
                data: { collaborateur },
                status
            } = await modifyProfil(currentUser.id, values);
            if (status === 201) {
                dispatch(setUser(collaborateur));
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Layout>
                <div className={form__container}>
                    <form className={form__profil} onSubmit={handleSubmit(submitFrom)}>
                        <div className={form__group}>
                            <div className={input__group}>
                                <label htmlFor="gender">Genre</label>
                                <select
                                    {...register("gender")}
                                    defaultValue={currentUser?.gender}
                                    name="gender">
                                    <option value="female">Femme</option>
                                    <option value="male">Homme</option>
                                </select>
                            </div>
                            <div className={input__group}>
                                <label htmlFor="service">Services</label>
                                <select
                                    {...register("service")}
                                    defaultValue={currentUser?.service}
                                    name="service">
                                    <option value="Technique">Technique</option>
                                    <option value="Client">Client</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>
                            <div className={input__group}>
                                <label htmlFor="lastname">Nom</label>
                                <input
                                    {...register("lastname")}
                                    defaultValue={currentUser?.lastname}
                                    name="lastname"
                                    type="text"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="firstname">Pr??nom</label>
                                <input
                                    {...register("firstname")}
                                    defaultValue={currentUser?.firstname}
                                    type="firstname"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="email">Email</label>
                                <input
                                    {...register("email")}
                                    defaultValue={currentUser?.email}
                                    name="email"
                                    type="email"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="password">Mot de passe</label>
                                <input {...register("password")} name="password" type="password" />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className={input__group}>
                                <label htmlFor="">V??rification du mot de passe</label>
                                <input
                                    {...register("password2", {
                                        validate: (value) => value === getValues("password")
                                    })}
                                    type="password"
                                    name="password2"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="phone">T??l??phone</label>
                                <input
                                    {...register("phone")}
                                    defaultValue={currentUser?.phone}
                                    name="phone"
                                    type="tel"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="birthdate">Date de naissance</label>
                                <input
                                    {...register("birthdate")}
                                    defaultValue={currentUser?.birthdate}
                                    name="birthdate"
                                    type="date"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="city">Ville</label>
                                <input
                                    {...register("city")}
                                    defaultValue={currentUser?.city}
                                    name="city"
                                    type="text"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="country">Pays</label>
                                <input
                                    {...register("country")}
                                    defaultValue={currentUser?.country}
                                    name="country"
                                    type="text"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="photo">Url de la photo</label>
                                <input
                                    {...register("photo")}
                                    defaultValue={currentUser?.photo}
                                    name="photo"
                                    type="url"
                                />
                            </div>
                        </div>
                        {errors.password2 && <span>Les mots de passe ne sont pas identiques</span>}
                        <button type="submit">Modifier</button>
                    </form>
                </div>
            </Layout>
        </>
    );
};
