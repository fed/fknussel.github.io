import React from 'react';
import Button from '../button';
import social from 'model/social';
import styles from './styles.css';

const Social = () => (
  <nav className={styles.social}>
    {
      social.map(item => (
        <Button key={item.id} type={item.id} url={item.url}>{item.description}</Button>
      ))
    }
  </nav>
);

export default Social;
