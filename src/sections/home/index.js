import React from "react";
import { Emoji } from "@/components";
import styles from "./index.module.scss";
import Image from "next/image";
import animatedImage from '@/assets/animated_image.png';

const HomeSection = () => {

  return (
    <section className={styles.heroSection}>
      <div className={styles.textContent}>
        <h1>Hello, I am</h1>
        <h2>
          Manish Sundriyal.
        </h2>
        <h3>Software Artisan</h3>
        <p>
          <Emoji symbol="🚀" className={styles.rocket} /> Crafting exceptional
          digital experiences, specializing in scaling projects and teams.
        </p>
        <a href="/Manish_Sundriyal_Resume.pdf" target='_blank'>Download Resume</a>
      </div>
      <div className={styles.heroAnimation}>
        <Image src={animatedImage} alt=''/>
      </div>
    </section>
  );
};

export default HomeSection;
