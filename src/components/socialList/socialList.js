import React from 'react';
import styles from './socialList.module.scss';

const links = [
    {
        icon: "social icon 1",
        path: ""
    },
    {
        icon: "social icon 2",
        path: ""
    },
    {
        icon: "social icon 3",
        path: ""
    },
    {
        icon: "social icon 3",
        path: ""
    }
]
const SocialList = () => {
  return (
    <div className={styles.socialList}>
        <ul>
            {
                links.map(link => <li key={link.path}>{link.icon}</li>)
            }
        </ul>
    </div>
  )
}

export default SocialList