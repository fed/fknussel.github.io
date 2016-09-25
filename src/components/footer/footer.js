import React from 'react';
import styles from './footer.css';
import twitterIcon from './twitter.svg';
import githubIcon from './github.svg';
import mediumIcon from './medium.svg';
import linkedinIcon from './linkedin.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <a className={styles.link} href="//twitter.com/fknussel">
      <img className={styles.twitterIcon} src={twitterIcon} />
    </a>
    <a className={styles.link} href="//github.com/fknussel">
      <img className={styles.githubIcon} src={githubIcon} />
    </a>
    <a className={styles.link} href="//medium.com/@fknussel">
      <img className={styles.mediumIcon} src={mediumIcon} />
    </a>
    <a className={styles.link} href="//linkedin.com/in/fknussel">
      <img className={styles.linkedinIcon} src={linkedinIcon} />
    </a>
  </footer>
);

export default Footer;
