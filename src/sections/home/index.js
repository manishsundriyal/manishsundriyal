import React from 'react';
import { Emoji } from "@/components"
import styles from "./index.module.scss";

const HomeSection = () => {
  return (
    <section className={styles.heroSection}>
        <h1>Hello, I am</h1>
        <h2>Manish Sundriyal. <Emoji symbol="👋" className={styles.wave} /></h2>
        <h3>Software Artisan</h3>
        <p><Emoji symbol="🚀" className={styles.rocket} /> Crafting exceptional digital experiences, specializing in scaling projects and teams.</p>
        <a>Action button here</a>
      </section>
  );
};

export default HomeSection