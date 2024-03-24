import React from "react";
import styles from "./Hero.module.css";

import heroImage from "../../assets/hero/heroImage.png";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kelly </h1>
                
                <p className={styles.description} >
                    I'm an emerging full-stack developer from Brigham Young University-Idaho, backed by a strong academic base and eager to transform real-world challenges with innovative tech solutions.
                </p>
                <a href="mailto:mrs.kellyannclark@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
            <img src={heroImage} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
            
        </section>
    );
};
