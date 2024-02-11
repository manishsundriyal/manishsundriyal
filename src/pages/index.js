import React from 'react';
import styles from '@/styles/Home.module.scss';

const Home = () => {
  return (
    <main className={styles.heroContainer}>
      <section className={styles.heroSection}>
        <h1>Hello, I am</h1>
        <h2>Manish Sundriyal</h2>
        <h3>Some h3 here</h3>
        <p>
          some extra details here
        </p>
        <a>Action button here</a>
      </section>
    </main>
  )
};

export default Home;