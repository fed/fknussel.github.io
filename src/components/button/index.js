import React from 'react';
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
  type: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default SocialButton;
