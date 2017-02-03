import React from 'react';
import Button from '../button';
import styles from './styles.css';

const Social = () => (
  <nav className={styles.social}>
    <Button type="twitter" url="//twitter.com/fknussel">Twitter</Button>
    <Button type="github" url="//github.com/fknussel">GitHub</Button>
    <Button type="medium" url="//medium.com/@fknussel">Medium</Button>
    <Button type="linkedin" url="//linkedin.com/in/fknussel">LinkedIn</Button>
  </nav>
);

export default Social;
