import React from 'react';
import Button from '../button';
import social from '../../model/social';
import './styles.css';

export default function Social() {
  return (
    <nav className="Social">
      {
        social.map(item => (
          <Button className="Social-link" key={item.id} type={item.id} url={item.url}>
            {item.name}
          </Button>
        ))
      }
    </nav>
  );
}