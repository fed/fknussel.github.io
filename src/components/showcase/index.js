import React from 'react';
import styles from './styles.css';

const renderLinks = (links) => (
  <ul className={styles.showcaseLinks}>
    {
      links.map((link, index) => (
        <li key={index}>
          <p className={styles.showcaseLinksTitle}>
            <a href={link.url}>{link.title}</a>
          </p>

          {
            link.description && (
              <p className={styles.showcaseLinkDescription}>
                {link.description}
              </p>
            )
          }
        </li>
      ))
    }
  </ul>
);

const Showcase = ({ image, title, content, links }) => (
  <div className={styles.showcase}>
    <div className={styles.showcaseLeftColumn}>
      <img className={styles.showcaseImage} src={image} />
    </div>

    <div className={styles.showcaseRightColumn}>
      <h1 className={styles.showcaseTitle}>{title}</h1>
      <p className={styles.showcaseContent}>{content}</p>
      {links && renderLinks(links)}
    </div>
  </div>
);

Showcase.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string,
  links: React.PropTypes.array
};

export default Showcase;
