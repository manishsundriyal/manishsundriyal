import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import styles from './socialList.module.scss';
import Link from 'next/link';

const links = [
    {
        icon: faGithub,
        path: "/github"
    },
    {
        icon: faLinkedin,
        path: "/linkedin"
    },
    {
        icon: faMediumM,
        path: "/medium"
    },
    {
        icon: faStackOverflow,
        path: "/stackoverflow"
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