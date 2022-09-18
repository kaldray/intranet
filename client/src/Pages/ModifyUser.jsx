import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setModifyUser } from "@app/Redux/reducers/userReducer";

import { getSpecificCollaborater, modifyProfil } from "@app/Services";
import { Layout } from "@app/Components";

import {
    input__group,
    form__container,
    form__group,
    form__profil
} from "@app/Sass/Pages/Profil.module.scss";

export const ModifyUser = () => {
    const { id } = useParams();
    const { modifyUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUserInfo() {
            const data = await getSpecificCollaborater(id);
            dispatch(setModifyUser(data));
        }
        getUserInfo();
    }, []);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            gender: modifyUser?.gender,
            service: modifyUser?.service,
            lastname: modifyUser?.lastname,
            firstname: modifyUser?.firstname,
            email: modifyUser?.email,
            phone: modifyUser?.phone,
            birthdate: modifyUser?.birthdate,
            city: modifyUser?.city,
            country: modifyUser?.country,
            photo: modifyUser?.photo
        }
    });

    async function submitForm(data) {
        delete data.password2;
        if (data.password === "") {
            delete data.password;
        }
        console.log(data);
        modifyProfil(id, data);
    }

    return (
        <div>
            <Layout>
                <div className={form__container}>
                    <form className={form__profil} onSubmit={handleSubmit(submitForm)}>
                        <div className={form__group}>
                            <div className={input__group}>
                                <label htmlFor="gender">Genre</label>
                                <select {...register("gender")} name="gender">
                                    <option value="female">Femme</option>
                                    <option value="male">Homme</option>
                                </select>
                            </div>
                            <div className={input__group}>
                                <label htmlFor="service">Services</label>
                                <select {...register("service")} name="service">
                                    <option value="Technique">Technique</option>
                                    <option value="Client">Client</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>
                            <div className={input__group}>
                                <label htmlFor="lastname">Nom</label>
                                <input {...register("lastname")} name="lastname" type="text" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="firstname">Prénom</label>
                                <input {...register("firstname")} type="firstname" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="email">Email</label>
                                <input {...register("email")} name="email" type="email" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="password">Mot de passe</label>
                                <input {...register("password")} name="password" type="password" />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className={input__group}>
                                <label htmlFor="">Vérification du mot de passe</label>
                                <input
                                    {...register("password2", {
                                        validate: (value) => value === getValues("password")
                                    })}
                                    type="password"
                                    name="password2"
                                />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="phone">Téléphone</label>
                                <input {...register("phone")} name="phone" type="tel" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="birthdate">Date de naissance</label>
                                <input {...register("birthdate")} name="birthdate" type="date" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="city">Ville</label>
                                <input {...register("city")} name="city" type="text" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="country">Pays</label>
                                <input {...register("country")} name="country" type="text" />
                            </div>
                            <div className={input__group}>
                                <label htmlFor="photo">Url de la photo</label>
                                <input {...register("photo")} name="photo" type="url" />
                            </div>
                        </div>
                        {errors.password2 && <span>Les mots de passe ne sont pas identiques</span>}
                        <button type="submit">Modifier</button>
                    </form>
                </div>
            </Layout>
        </div>
    );
};
