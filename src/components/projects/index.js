import React from 'react';
import PropTypes from 'prop-types';
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
  projects: PropTypes.array
};

export default Projects;
