import React from 'react';
import PropTypes from 'prop-types';
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
    <figure className={styles.showcaseLeftColumn}>
      <img className={styles.showcaseImage} src={image} alt={title} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>

    <div className={styles.showcaseRightColumn}>
      <h1 className={styles.showcaseTitle}>{title}</h1>
      <p className={styles.showcaseContent}>{content}</p>

      {
        links && renderLinks(links)
      }
    </div>
  </div>
);

Showcase.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  links: PropTypes.array
};

export default Showcase;
