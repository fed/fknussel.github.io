import React from 'react';
import Showcase from '../showcase';
import styles from './styles.css';

const Projects = ({ projects }) => (
  <section className={styles.projects}>
    {
      projects.map((project, index) => (
        <article key={index} className={styles.project}>
          <a name={project.id} />

          <Showcase {...project} />
        </article>
      ))
    }
  </section>
);

Projects.defaultProps = {
  projects: []
};

Projects.propTypes = {
  projects: React.PropTypes.array
};

export default Projects;
