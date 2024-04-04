import React from "react";
import { Emoji } from "@/components";
import styles from "./index.module.scss";
import Image from "next/image";

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
      <div className={styles.heroAnimation} style={{
        position: 'relative',
        height: 297,
        width: 318,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: `url(https://ik.imagekit.io/zfvhvoweg/__next_static_media_animated_image.57c3d8f5.png?tr=bl-6&q-1)`
      }}>
        <div styles={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
          <Image 
            src="https://ik.imagekit.io/zfvhvoweg/__next_static_media_animated_image.57c3d8f5.png?tr=q-100"
            alt=''
            width={318}
            height={297}
          />
      </div>
      </div>
    </section>
  );
};

export default HomeSection;
