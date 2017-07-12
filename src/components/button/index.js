import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

function getButtonClassName(type) {
  switch (type) {
    case 'twitter':
      return styles.buttonTwitter;
    case 'github':
      return styles.buttonGithub;
    case 'medium':
      return styles.buttonMedium;
    case 'linkedin':
      return styles.buttonLinkedin;
    default:
      return styles.buttonDefault;
  }
}

const SocialButton = ({ children, type, url }) => (
  <a className={getButtonClassName(type)} href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SocialButton;
