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

const Button = ({children, type}) => (
  <button className={getButtonClassName(type)}>
    {children}
  </button>
);

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default Button;
