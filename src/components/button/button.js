import React from 'react';
import styles from './button.css';

function getButtonClassName(type) {
  let className;

  switch (type) {
    case 'twitter':
      className = styles.buttonTwitter;
      break;
    case 'github':
      className = styles.buttonGithub;
      break;
    case 'medium':
      className = styles.buttonMedium;
      break;
    case 'linkedin':
      className = styles.buttonLinkedin;
      break;
  }

  return className;
}

function redirect(url) {
  window.location = url;
}

const Button = ({children, type, url}) => (
  <button className={getButtonClassName(type)} onClick={redirect.bind(null, url)}>
    {children}
  </button>
);

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default Button;
