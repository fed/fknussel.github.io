import React from 'react';
// import Navigation from '../navigation/navigation';
import Hero from '../hero/hero';
import styles from './header.css';

const Header = () => (
  <header className={styles.header}>
    {/*<Navigation />*/}
    <Hero />
  </header>
);

export default Header;
