import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Layout } from "@app/Components";
import { userLogin } from "@app/Services";
import { setUser } from "@app/Redux/reducers/userReducer";

import { form__group, form__container } from "@app/Sass/Pages/Login.module.scss";

export const Login = () => {
    const mail = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function login(e, email, password) {
        e.preventDefault();
        const { user } = await userLogin(email, password);
        navigate("/home", {
            replace: true
        });
        dispatch(setUser(user));
    }

    return (
        <>
            <Layout>
                <form
                    onSubmit={(e) => login(e, mail.current.value, password.current.value)}
                    className={form__container}>
                    <div className={form__group}>
                        <label htmlFor="email">Email</label>
                        <input ref={mail} aria-autocomplete="mail" name="email" type="mail" />
                    </div>
                    <div className={form__group}>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            ref={password}
                            aria-autocomplete="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
            </Layout>
        </>
    );
};
