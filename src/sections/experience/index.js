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
    description: [
      "Implemented bulk email service using Postmark, replacing Sendgrid for cost reduction.",
      "Implemented an access control management tool for admins.",
      "Worked on features like groups, programs, and career paths." ,
      "Icons Audit: Migrated icons from codebase to CDN to reduce overall bundle size.",
      "Designed a widget enabling users to ask questions, utilized the ChatGPT API to generate specific queries, and directed them to relevant experts for responses",
      "Developed migration scripts for seamless user data updates at scale.",
      "Collaborated with the design team to address platform-wide accessibility issues, ensuring compliance and securing accessibility certification.",
    ],
  },
  {
    title: "Associate Engineer",
    company: "Successive Technologies",
    companyUrl: "https://successive.tech/",
    start: "JULY 2018",
    end: "SEPT 2020",
    previousDesignations: ["Software Engineer - Trainee"],
    description: [
      "Implemented bulk email service using Postmark, replacing Sendgrid for cost reduction.",
      "Implemented an access control management tool for admins.",
      "Worked on features like groups, programs, and career paths." ,
      "Icons Audit: Migrated icons from codebase to CDN to reduce overall bundle size.",
      "Designed a widget enabling users to ask questions, utilized the ChatGPT API to generate specific queries, and directed them to relevant experts for responses",
      "Developed migration scripts for seamless user data updates at scale.",
      "Collaborated with the design team to address platform-wide accessibility issues, ensuring compliance and securing accessibility certification.",
    ],
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
    "Working as a tech mentor for the Plus program. Mentored 17+ students so far in the following technologies: HTML, CSS, JavaScript, NodeJs, ExpressJS, ReaactJS, Redux, MySQL, MongoDB, Data Structures, Algorithms, and System Design.",
  },
  {
    title: "Software Developer Intern",
    company: "Daphnis Labs",
    companyUrl: "https://www.daphnislabs.com/",
    start: "DEC 2017",
    end: "FEB 2018",
    previousDesignations: [],
    description:
      "Developed the features to analyze and manage data in the admin and analytics web panel of the Perb health & fitness Android application.",
  },
  {
    title: "Teaching Assistant",
    company: "Coding Blocks",
    companyUrl: "https://codingblocks.com/",
    start: "SEPT 2017",
    end: "NOV 2017",
    description:
      "Worked as a teaching assistant for the Algorithms & Data Structures course, helped students to clear their doubts in algorithms and data structures. Prepared assignment problems and reviewed student's solution codes to help them in writing fast and efficient code.",
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
        <div className={styles.title}><span>{title}</span>, <span className={styles.company}>{company}</span></div>
        {previousDesignations.map((designation) => (
          <div key={designation} className={clsx(styles.title, styles.previousDesignation)}>
            {designation}
          </div>
        ))}
        {typeof description === 'string' ? <p className={styles.description}>
          {description}
        </p> : 
        <ul className={styles.description}>
          {description.map(text => <li key={text}>{text}</li>)}
        </ul>
  }
      </div>
    </li>))
  }

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2>Experience</h2>
      {/* <h3>Full Time Experiences</h3> */}
      <div className={styles.timeline}>
        <ol>
          {getExperienceCard(FULL_TIME_EXPERIENCES)}
        </ol>
      </div>
      {/* <h3>Intern / Part Time Experiences</h3> */}
      <div className={styles.timeline}>
        <ol>
          {getExperienceCard(PART_TIME_EXPERIENCES)}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
