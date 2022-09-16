import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Layout } from "@app/Components";
import { userLogin } from "@app/Services";
import { setUser } from "@app/Redux/reducers/userReducer";

import { form__group, form__container } from "@app/Sass/Pages/Login.module.scss";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm();

    async function login({ email, password }) {
        try {
            const {
                status,
                data: { user }
            } = await userLogin(email, password);
            if (status > 400) {
                setError("password", {
                    type: "custom",
                    message: "L'un des deux champs est invalides."
                });
            }
            if (status === 200) {
                dispatch(setUser(user));
                navigate("/home", {
                    replace: true
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit(login)} className={form__container}>
                    <div className={form__group}>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} name="email" type="email" />
                    </div>
                    <div className={form__group}>
                        <label htmlFor="password">Mot de passe</label>
                        <input {...register("password")} name="password" type="password" />
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}
                    <button type="submit">Se connecter</button>
                </form>
            </Layout>
        </>
    );
};
