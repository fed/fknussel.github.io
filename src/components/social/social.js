import React from 'react';
import Button from '../button/button';
import styles from './social.css';

const Social = () => (
  <nav className={styles.social}>
    <Button type="twitter" link="#">Twitter</Button>
    <Button type="github" link="#">GitHub</Button>
    <Button type="medium" link="#">Medium</Button>
    <Button type="linkedin" link="#">LinkedIn</Button>
  </nav>
);

export default Social;
