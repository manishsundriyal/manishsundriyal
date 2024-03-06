import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const FULL_TIME_EXPERIENCES = [
  {
    title: "SDE 2",
    company: "PeopleGrove",
    companyUrl: "https://www.peoplegrove.com/",
    start: "SEPT 2020",
    end: "PRESENT",
    previousDesignations: ["SDE"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Associate Engineer",
    company: "Successive Technologies",
    companyUrl: "https://successive.tech/",
    start: "JULY 2018",
    end: "SEPT 2020",
    previousDesignations: ["Software Engineer - Trainee"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Software Developer Intern",
    company: "Daphnis Labs",
    companyUrl: "https://www.daphnislabs.com/",
    start: "DEC 2017",
    end: "FEB 2018",
    previousDesignations: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const PART_TIME_EXPERIENCES = [
  {
    title: "Tech Mentor",
    company: "Pesto Tech",
    companyUrl: "https://www.pesto.tech/",
    start: "DEC 2022",
    end: "PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Teaching Assistant",
    company: "Coding Blocks",
    companyUrl: "https://codingblocks.com/",
    start: "SEPT 2017",
    end: "NOV 2017",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ExperienceSection = () => {

  const getExperienceCard = (experiences = []) => {
    
    return experiences.map(({
      title,
      company,
      start,
      end,
      description,
      previousDesignations = [],
    }) => (<li key={title}>
      <div className={styles.listWrapper}>
        <div className={styles.date}>{`${start} — ${end}`}</div>
        <div className={styles.title}>{` ${title}, ${company}`}</div>
        {previousDesignations.map((designation) => (
          <div key={designation} className={clsx(styles.title, styles.previousDesignation)}>
            {designation}
          </div>
        ))}
        <p className={styles.description}>{description}</p>
      </div>
    </li>))
  }

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2>Experience</h2>
      <h3>Full Time Experiences</h3>
      <div className={styles.timeline}>
        <ol>
          {getExperienceCard(FULL_TIME_EXPERIENCES)}
        </ol>
      </div>
      <h3>Intern / Part Time Experiences</h3>
      <div className={styles.timeline}>
        <ol>
          {getExperienceCard(PART_TIME_EXPERIENCES)}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
