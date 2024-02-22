import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h1>About Me</h1>
      <div className={styles.sectionWrapper}>
        <div>
          <p>
            Hello there! I&apos;m Manish, a developer hailing from the diverse
            tech landscape of India.
          </p>

          <p>
            My coding journey began in 2017 as an Android Developer Intern, and
            like a well-crafted story, it smoothly transitioned into the
            exciting world of web development. Today, I proudly hold the
            position of an SDE 2 at
            <Link href="https://www.peoplegrove.com" target="_blank">
              PeopleGrove
            </Link>
            , where I happily contribute to creating accessible and
            user-friendly products.
          </p>

          <p>
            When I&apos;m not immersed in the PERN stack, you can catch me
            spreading knowledge and good vibes by mentoring folks in my free
            time. I collaborate with organizations like{" "}
            <Link href="https://www.pesto.tech" target="_blank">
              pesto.tech
            </Link>{" "}
            and{" "}
            <Link href="https://www.feaindia.org" target="_blank">
              feaindia.org
            </Link>
            because sharing is caring, even in the coding realm!
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default AboutSection;
