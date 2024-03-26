import React from "react";
import history from "../../data/history.json"; // Keep using 'history' as is
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
import byuiIcon from "../../assets/skills/byuiIcon.png";
import byuPathwayIcon from "../../assets/skills/byuPathwayIcon.png";

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

    const historyImages = {
        "Brigham Young University - Idaho": byuiIcon, 
        "Certificate in Web & Computer Programming": byuiIcon, 
        "BYU-Pathway Worldwide": byuPathwayIcon,
    };

    return (
        <section className={styles.container} id="expertise">
            <h2 className={styles.title}>Expertise</h2>
            <div className={styles.content}>
                <div className={styles.skillsSection}>
                    {skills.map((skill, id) => (
                        <div className={styles.skill} key={id}>
                            <img className={styles.skillImage} 
                            src={skillImages[skill.title]} 
                            alt={skill.title} />
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.historySection}>
                    <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                            <li key={id} className={styles.historyItem}>
                                {/* Determine the correct key for lookup */}
                                <img className={styles.historyImage} 
                                    src={historyItem.title in historyImages ? historyImages[historyItem.title] : historyImages[historyItem.institution]} 
                                    alt={historyItem.title} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.title}, ${historyItem.institution}`}</h3>
                                    <p>{`${historyItem.location}, ${historyItem.date}`}</p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    );
};
