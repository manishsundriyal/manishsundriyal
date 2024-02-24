import React from "react";
import styles from "./index.module.scss";

const FULL_TIME_EXPERIENCES = [
  {
    title: "SDE 2",
    company: "PeopleGrove",
    start: "MAR 2021",
    end: "PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "SDE",
    company: "PeopleGrove",
    start: "SEPT 2020",
    end: "MAR 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Software Engineer - Trainee",
    company: "Successive Technologies",
    start: "JULY 2018",
    end: "JAN 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Associate Engineer",
    company: "Successive Technologies",
    start: "JAN 2019",
    end: "SEPT 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Software Developer Intern",
    company: "Daphnis Labs",
    start: "DEC 2017",
    end: "FEB 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const PART_TIME_EXPERIENCES = [
  {
    title: "Tech Mentor",
    company: "Pesto Tech",
    start: "DEC 2022",
    end: "PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Teaching Assistant",
    company: "Coding Blocks",
    start: "SEPT 2017",
    end: "NOV 2017",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2>Experience</h2>
      <div className={styles.timeline}>
        <ol>
          {FULL_TIME_EXPERIENCES.map(
            ({ title, company, start, end, description }) => (
              <li key={title}>
                <div className={styles.listWrapper}>
                  <header>{`${start} — ${end}`}</header>
                  <div className={styles.description}>
                    <div>{`${company}, ${title}`}</div>
                    <div>{description}</div>
                  </div>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
