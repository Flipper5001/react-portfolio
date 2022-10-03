import React from "react";
import css from '../pages/Portfolio.module.css';

const Projects = props => {

    return (
        <a key={props.id} href={props.url} id={props.css}>
            <a href={props.url} className={css.textbox}>
                <p className={css.text}>{props.name}</p>
            </a>
        </a>
    )
}       


export default Projects;