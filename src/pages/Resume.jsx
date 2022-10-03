import React from "react";
import MasterLayout from "../layouts/MasterLayout";
import css from './Resume.module.css';
import placeholder from '../components/placeholder-resume.txt';

export default function resume() {
    return (
        <MasterLayout>
            <section className={css.content}>
                <h3 className={css.text}>Download my <a href={placeholder} download='placeholder-resume.txt'>Resume</a></h3>
                <article className={css.text}>
                    <h1>Skills</h1>
                    <p>------------------</p>
                    <p>HTML | CSS | JavaScript</p>
                    <p>JQuery | Bootstrap | Foundation</p>
                    <p>MySQL | Express | Node | Sequelize</p>
                    <p className={css.bottomtext}>React | Umbraco</p>
                </article>
            </section>
            <section className={css.hero}></section>
        </MasterLayout>
    )
}