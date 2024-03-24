import React from "react";
import aboutMe from "../../assets/about/aboutMe.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

import styles from "./About.module.css";


export const About = () => {
    return  (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src={aboutMe} 
                alt="About Me Image" 
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}> 
                        <img className={styles.icons} src={cursorIcon} alt="On laptop" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p className={styles.aboutItemTextParagraph}>
                                I'm a frontend developer with experience in building responsive and optimized sites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img className={styles.icons} src={serverIcon} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p className={styles.aboutItemTextParagraph}>
                                I have experience developing fast and optimized back-end systems and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        
                        <img className={styles.icons} src={uiIcon} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                UI/UX Designer
                            </h3>
                            <p className={styles.aboutItemTextParagraph}>
                                I have designed multiple landing pages and have created design systems as well.
                            </p>
                        </div>
                    </li>
                </ul>
                </div>
        </section>
    )
};