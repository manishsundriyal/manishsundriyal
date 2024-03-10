import React from "react";
import styles from './index.module.scss';

const CONTACT_OPTIONS = [
  {
    reason: "Exploring Opportunities",
    description: "Interested in potential collaborations, partnerships, or other opportunities? Let's discuss how we can create positive outcomes together."
  },
  {
    reason: "Seeking Mentorship",
    description: "If you're looking for guidance and mentorship, I'm here to share my knowledge and experience."
  },
  {
    reason: "Project Assistance",
    description: "Need help with a project? Whether it's brainstorming ideas or hands-on support, I'm ready to contribute."
  },
  {
    reason: "Invitation",
    description: "Planning an event or collaboration? Extend an invitation, and let's explore exciting opportunities together."
  },
  {
    reason: "Feedback and Suggestions",
    description: "Your insights and recommendations are invaluable. Whether it's feedback or suggestions, I'm eager to hear your thoughts."
  },
];


const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Get in Touch</h2>
      <div className={styles.sectionWrapper}>
        <p>
          Looks like you&apos;d like to connect with me. You might want to connect with me because
          <ul>
            {
              CONTACT_OPTIONS.map(option => <li key={option.reason}><span className={styles.reason}>{option.reason}: </span>{option.description}</li>)
            }
          </ul>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
