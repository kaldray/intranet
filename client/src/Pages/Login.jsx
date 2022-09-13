import React, { useRef } from "react";
import { Layout } from "@app/Components";
import { userLogin } from "@app/Services";

import { form__group, form__container } from "@app/Sass/Components/login.module.scss";
import { Link } from "react-router-dom";

export const Login = () => {
    const mail = useRef();
    const password = useRef();

    async function login(email, password) {
        const data = await userLogin(email, password);
    }

    return (
        <>
            <Layout>
                <form className={form__container}>
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
                    <Link
                        onClick={() => login(mail.current.value, password.current.value)}
                        to={"/protected"}
                        replace={true}>
                        <button>Se connecter</button>
                    </Link>
                </form>
            </Layout>
        </>
    );
};
