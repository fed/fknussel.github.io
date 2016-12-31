import React from 'react';
import styles from './styles.css';

const email = 'fknussel@gmail.com';

const Hero = () => (
  <header className={styles.hero}>
    <h1 className={styles.title}>Federico Knüssel</h1>
    <h2 className={styles.subtitle}>Software Engineer</h2>
    <p className={styles.content}>
      I'm a Front End Developer with a keen interest in JavaScript and Functional Reactive Programming, and I help development teams build maintainable and scalable web and mobile apps. Feel free to hit me up on <a href={`mailto:${email}`}>{email}</a>.
    </p>
  </header>
);

export default Hero;
