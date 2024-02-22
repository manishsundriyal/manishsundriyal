import React from "react";
import styles from "@/styles/Home.module.scss";
import { AboutSection, ContactSection, ExperienceSection, HomeSection } from "@/sections";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Home;
