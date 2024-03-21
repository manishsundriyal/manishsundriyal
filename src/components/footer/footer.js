import { faGithub, faLinkedin, faMedium, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./footer.module.scss";

const SOCIAL_LINKS = [
    {
        icon: faLinkedin,
        path: "linkedin",
    },
    {
        icon: faGithub,
        path: "github",
    },
    {
        icon: faXTwitter,
        path: "twiiter",
    },
    {
        icon: faMedium,
        path: "medium",
    }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.socialLinks}>
            {
                SOCIAL_LINKS.map(link => <li key={link.path}><FontAwesomeIcon icon={link.icon} /></li>)
            }
        </ul>
        <hr />
        <div className={styles.credit}>
            <div>Designed & Built by Manish Sundriyal</div>
        </div>
    </footer>
  )
}

export default Footer