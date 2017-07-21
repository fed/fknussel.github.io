import React from 'react';
import Showcase from '../showcase';
import projects from '../../model/projects.js';
import './styles.css';

export default function Projects() {
  return (
    <section className="Projects">
      {
        projects.map((project, index) => (
          <article key={index} className="Projects-item">
            <a name={project.id}>{project.name}</a>

            <Showcase {...project} />
          </article>
        ))
      }
    </section>
  );
}