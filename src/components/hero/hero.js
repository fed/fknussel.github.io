import React from 'react';
import styles from './hero.css';

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.heroTitle}>Federico Knüssel</h1>
    <h2 className={styles.heroSubTitle}>Software Engineer</h2>
    <p className={styles.heroContent}>I'm a Front End Developer with a keen interest in JavaScript and Functional Reactive Programming, and I help development teams build maintainable and scalable web and mobile apps. Feel free to hit me up on <a href="notanactualpage.com">fknussel@gmail.com</a>.</p>
  </section>
);

export default Hero;
