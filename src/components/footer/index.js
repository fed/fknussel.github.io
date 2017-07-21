import React from 'react';
import styles from './styles.css';
import social from 'model/social';

const Footer = () => (
  <footer className={styles.footer}>
    {
      social.map(item => (
        <a className={styles.link} href={item.url} key={item.id}>
          <img className={styles.icon} src={item.icon} alt={item.description} title={item.description} />
          <span className={styles.description}>
            {item.description}
          </span>
        </a>
      ))
    }
  </footer>
);

export default Footer;
