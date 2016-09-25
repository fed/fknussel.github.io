import React from 'react';
import styles from './showcase.css';

const renderLinks = (links) => (
  <ul className={styles.showcaseLinks}>
    {
      links.map((link, index) => (
        <li key={index}>
          <p className={styles.showcaseLinksTitle}>
            <a href={link.url}>{link.title}</a>
          </p>
          <p className={styles.showcaseLinkDescription}>{link.description}</p>
        </li>
      ))
    }
  </ul>
);

const Showcase = ({image, title, content, links}) => (
  <section className={styles.showcase}>
    <div className={styles.showcaseLeftColumn}>
      <img className={styles.showcaseImage} src={image} />
    </div>

    <div className={styles.showcaseRightColumn}>
      <h1 className={styles.showcaseTitle}>{title}</h1>
      <p className={styles.showcaseContent}>{content}</p>
      {links && renderLinks(links)}
    </div>
  </section>
);

Showcase.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  links: React.PropTypes.array
};

export default Showcase;

// baconjs: https://baconjs.github.io/logo.png
// flux: https://worldvectorlogo.com/logos/flux.svg
// redux: https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png
// react: http://formatjs.io/img/react.svg
// rx: https://avatars3.githubusercontent.com/u/6407041?v=3&s=400
