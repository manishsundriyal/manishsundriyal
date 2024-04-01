import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import styles from './socialList.module.scss';
import Link from 'next/link';

const links = [
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
const SocialList = () => {
  return (
    <div className={styles.socialList}>
        <ul>
            {
                links.map(link => <li key={link.path}><FontAwesomeIcon icon={link.icon} /></li>)
            }
        </ul>
    </div>
  )
}

export default SocialList