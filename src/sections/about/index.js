import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import userImage from "../../assets/user_image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>
      <div className={styles.sectionWrapper}>
        <div className={styles.userImage}>
          <Image src={userImage} alt="manish image" />
        </div>
        <div>
          <p>
            Hello there! I&apos;m Manish, a developer hailing from the diverse
            tech landscape of India.
          </p>

          <p>
            My coding journey began in 2017 as an Android Developer Intern, and
            like a well-crafted story, it smoothly transitioned into the
            exciting world of web development. Today, I proudly hold the
            position of an SDE 2 at &nbsp;
            <Link href="https://www.peoplegrove.com" target="_blank">
              PeopleGrove
            </Link>
            , where I happily contribute to creating accessible and
            user-friendly products.
          </p>

          <p>
            When I&apos;m not immersed in the PERN stack, you can catch me
            spreading knowledge and good vibes by mentoring folks in my free
            time. I collaborate with organizations like&nbsp;
            <Link href="https://www.pesto.tech" target="_blank">
              pesto.tech
            </Link>
            &nbsp; and&nbsp;
            <Link href="https://www.feaindia.org" target="_blank">
              feaindia.org
            </Link>
            &nbsp;because sharing is caring, even in the coding realm!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
