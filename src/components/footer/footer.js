import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import styles from "./footer.module.scss";
import Link from 'next/link';

const SOCIAL_LINKS = [
    {
        icon: faGithub,
        path: "https://github.com/manishsundriyal/"
    },
    {
        icon: faLinkedin,
        path: "https://linkedin.com/in/manish-kumar-sundriyal"
    },
    {
        icon: faMediumM,
        path: "https://medium.com/@manishsundriyal"
    },
    {
        icon: faStackOverflow,
        path: "https://stackoverflow.com/users/7672624/manish-sundriyal"
    }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.socialLinks}>
            {
                SOCIAL_LINKS.map(link => <li key={link.path}><Link href={link.path} target="_blank"><FontAwesomeIcon icon={link.icon} /></Link></li>)
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