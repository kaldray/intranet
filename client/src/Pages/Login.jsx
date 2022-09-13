import React from "react";
import { Layout } from "@app/Components";

import { form__group, form__container } from "@app/Sass/Components/login.module.scss";

export const Login = () => {
    return (
        <>
            <Layout>
                <form className={form__container}>
                    <div className={form__group}>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" />
                    </div>
                    <div className={form__group}>
                        <label htmlFor="password">Mot de passe</label>
                        <input name="password" type="password" />
                    </div>
                    <button>Se connecter</button>
                </form>
            </Layout>
        </>
    );
};
