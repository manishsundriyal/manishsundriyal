import dynamic from 'next/dynamic';
import React from "react";
import { Emoji } from "@/components";
import styles from "./index.module.scss";
import Image from "next/image";
// import avatarImage from "@/assets/avatar.png";
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
import heroAnimation from '@/assets/hero_animation.json';

const HomeSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContent}>
        <h1>Hello, I am</h1>
        <h2>
          Manish Sundriyal.
          {/* <Emoji symbol="👋" className={styles.wave} /> */}
        </h2>
        <h3>Software Artisan</h3>
        <p>
          <Emoji symbol="🚀" className={styles.rocket} /> Crafting exceptional
          digital experiences, specializing in scaling projects and teams.
        </p>
        <a>Action button here</a>
      </div>
      <div className={styles.heroAnimation}>
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
};

export default HomeSection;
