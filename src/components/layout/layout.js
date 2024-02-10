import React from 'react';
import styles from './layout.module.scss';
import clsx from 'clsx';

const Layout = ({ children }) => {
  return (
    <>
        <main className={clsx(styles.mainSection)}>
            {children}
        </main>
    </>
  )
}

export default Layout