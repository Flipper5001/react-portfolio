import React from "react";
import MasterLayout from "../layouts/MasterLayout";
import css from "./Home.module.css";

export default function home() {
    return (
        <MasterLayout>
            <section className={css.content}>
                <article className={css.heading}>
                    <h1 className={css.pr10}>25.</h1>
                    <h1 className={css.pr10}>Designer.</h1>
                    <h1 className={css.pr10}>Animator.</h1>
                    <h1>Coder.</h1>
                </article>
                <section>
                    <article className={css.pb8}>
                        <p>------------------</p>
                        <p>Graduated University with a film major and a photography/animation minor.</p>
                        <p>Ran my own company for two years doing animations for small and large businesses.</p>
                        <p>Spent two years living and working in Tokyo for a Virtual Reality company.</p>
                        <p>Striving to learn code for the future.</p>
                    </article>
                </section>
            </section>
            <section className={css.hero}></section>
        </MasterLayout>
    )
}