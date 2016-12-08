import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import projects from './model/projects';

ReactDOM.render(
  <App projects={projects} />,
  document.getElementById('app')
);
