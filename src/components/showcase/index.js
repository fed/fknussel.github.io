import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

const showcaseLinksClassName = classnames('Showcase-links', 'content');
const renderLinks = (links) => (
  <ul className={showcaseLinksClassName}>
    {
      links.map((link, index) => (
        <li key={index}>
          <p className="Showcase-links-title">
            <a href={link.url}>{link.title}</a>
          </p>

          {
            link.description && (
              <p className="Showcase-links-description">
                {link.description}
              </p>
            )
          }
        </li>
      ))
    }
  </ul>
);

export default function Showcase({ image, title, content, links }) {
  const showcaseClassName = classnames('Showcase', 'container');
  const showcaseTitleClassName = classnames('Showcase-title', 'title');
  const showcaseContentClassName = classnames('Showcase-content', 'content');

  return (
    <div className={showcaseClassName}>
      <figure className="Showcase-left">
        <img className="Showcase-image" src={image} alt={title} />
        <figcaption className="sr-only">{title}</figcaption>
      </figure>

      <div className="Showcase-right">
        <h1 className={showcaseTitleClassName}>{title}</h1>
        <p className={showcaseContentClassName}>{content}</p>

        {
          links && renderLinks(links)
        }
      </div>
    </div>
  );
}

Showcase.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  links: PropTypes.array
};