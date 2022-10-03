import React from "react";
import MasterLayout from "../layouts/MasterLayout";
import css from "./Portfolio.module.css";
import Project from "../components/project";

export default function portfolio() {

    const projects =[
        { id: 1, url: "https://r7-workout-tracker.herokuapp.com/login", name: 'Workout Tracker', css: css.project1},
        { id: 2, url: "https://flipper5001.github.io/recipe-decider/", name: 'Recipe Decider', css: css.project2}, 
        { id: 3, url:"https://github.com/Flipper5001/tech-blog", name: 'Tech Blog', css: css.project3},
        { id: 4, url: "https://github.com/Flipper5001/online-portfolio", name: 'Online Portfolio', css: css.project4},
        { id: 5, url: "https://github.com/Flipper5001/coding-quiz", name: 'Coding Quiz', css: css.project5}, 
        { id: 6, url: "https://github.com/Flipper5001/weather-dashboard", name: 'Weather Dashboard', css: css.project6}
    ];

    return (
        <MasterLayout>
            <div className={css.row}>
                <Project id={projects[0].id} url={projects[0].url} name={projects[0].name} css={projects[0].css}/>
                <Project id={projects[1].id} url={projects[1].url} name={projects[1].name} css={projects[1].css}/>
            </div>
            <div className={css.row}>
                <Project id={projects[2].id} url={projects[2].url} name={projects[2].name} css={projects[2].css}/>
                <Project id={projects[3].id} url={projects[3].url} name={projects[3].name} css={projects[3].css}/>
            </div>
            <div className={css.bottomrow}>
                <Project id={projects[4].id} url={projects[4].url} name={projects[4].name} css={projects[4].css}/>
                <Project id={projects[5].id} url={projects[5].url} name={projects[5].name} css={projects[5].css}/>
            </div>
        </MasterLayout>
    )
}