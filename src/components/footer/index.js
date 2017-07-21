import React from 'react';
import social from '../../model/social';
import './styles.css';

export default function Footer() {
  return (
    <footer className="Footer">
      {
        social.map(item => (
          <a className="Footer-link" href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
            <img className="Footer-icon" src={item.icon} alt={item.name} title={item.name} />
            <span className="sr-only">
              {item.name}
            </span>
          </a>
        ))
      }
    </footer>
  );
}
