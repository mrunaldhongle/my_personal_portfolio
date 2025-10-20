import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mrunal Dhongle</h1>
        <p className={styles.description}>
         B.Tech CSE’26 student at SBJITMR, Nagpur, passionate about Full Stack Development, Frontend Engineering, and AI/ML. I love building impactful projects and growing with modern technologies.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
      src={getImageUrl("hero/hero1image.jpeg")}
        alt="Hero image of me"
        className={styles.hero1image}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
