import React from 'react';
import styles from './index.module.scss';

const EXPERIENCES = [
  {
    title: 'SDE 2',
    company: 'PeopleGrove',
    start: '',
    end: '',
    description: '',
  },
  {
    title: 'SDE',
    company: 'PeopleGrove',
    start: '',
    end: '',
    description: '',
  },
  {
    title: 'Software Engineer - Trainee',
    company: 'Successive Technologies',
    start: '',
    end: '',
    description: '',
  },
  {
    title: 'Associate Engineer',
    company: 'Successive Technologies',
    start: '',
    end: '',
    description: '',
  },
  {
    title: 'Software Developer Intern',
    company: 'Daphnis Labs',
    start: '',
    end: '',
    description: '',
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
        <h2>Experience</h2>
        <div>
          <h3>Senior Web Developer</h3>
          <p>
            <strong>Company:</strong> Tech Solutions Inc.
          </p>
          <p>
            <strong>Duration:</strong> 2018 - Present
          </p>
          <p>
            Led a team of developers in designing and implementing scalable web
            applications. Collaborated with clients to understand their
            requirements and provided technical solutions to meet their needs.
          </p>
        </div>

        <div>
          <h3>Junior Developer</h3>
          <p>
            <strong>Company:</strong> CodeCrafters Ltd.
          </p>
          <p>
            <strong>Duration:</strong> 2016 - 2018
          </p>
          <p>
            Gained hands-on experience in front-end and back-end development.
            Contributed to the development of several successful projects and
            worked closely with senior developers.
          </p>
        </div>
      </section>
  )
}

export default ExperienceSection;