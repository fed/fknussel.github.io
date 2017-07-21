import React from 'react';
import classnames from 'classnames';
import './styles.css';

const email = 'fknussel@gmail.com';

export default function Hero() {
  const heroClassName = classnames('Hero', 'container');
  const heroTitleClassName = classnames('Hero-title', 'title');
  const heroContentClassName = classnames('Hero-content', 'content');

  return (
    <header className={heroClassName}>
      <h1 className={heroTitleClassName}>Federico Knüssel</h1>
      <p className={heroContentClassName}>
        I'm a software developer with a keen interest in JavaScript and functional programming, and I help development teams ship clean and maintainable code. Feel free to hit me up on <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </header>
  );
}