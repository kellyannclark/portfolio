import React from "react";
import skills from "../../data/skills.json";
import cppIcon from '../../assets/skills/cppIcon.png';
import cSharpIcon from "../../assets/skills/cSharpIcon.png";
import javaIcon from "../../assets/skills/javaIcon.png";
import htmlIcon from "../../assets/skills/htmlIcon.png";
import cssIcon from "../../assets/skills/cssIcon.png";
import javascriptIcon from "../../assets/skills/javascriptIcon.png";
import reactIcon from "../../assets/skills/reactIcon.png";
import netIcon from "../../assets/skills/netIcon.png";
import nodeJsIcon from "../../assets/skills/nodeJsIcon.png";
import postgresIcon from "../../assets/skills/postgresIcon.png";
import mongodbIcon from "../../assets/skills/mongodbIcon.png";
import styles from './Expertise.module.css';



export const Expertise = () => {
    const skillImages = {
        "C++": cppIcon,
        "C#": cSharpIcon,
        "Java": javaIcon,
        "HTML": htmlIcon,
        "CSS": cssIcon,
        "JavaScript": javascriptIcon,
        "React": reactIcon,
        ".NET": netIcon,
        "Node.js": nodeJsIcon,
        "PostgreSQL": postgresIcon,
        "MongoDB": mongodbIcon,
    };
    return (
        <section className={styles.container} id="expertise">
            <h2 className={styles.title}>Expertise</h2>
            <div className={styles.content}>{
                skills.map((skill, id) => (
                    <div className={styles.skills} key={id}>
                        <img className={styles.skillImageContainer} src={skillImages[skill.title]} alt={skill.title} />
                        <p>{skill.title}</p>
                    </div>
                ))
            }</div>
        </section>
    );
};
