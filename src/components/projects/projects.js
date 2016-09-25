import React from 'react';
import Showcase from '../showcase/showcase';
import styles from './projects.css';

const Projects = ({projects}) => (
  <section className={styles.projects}>
    {
      projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <a name={project.id} />
          <Showcase
            image={project.image}
            title={project.title}
            content={project.content}
            links={project.links} />
        </div>
      ))
    }
  </section>
);

Projects.defaultProps = {
  projects: []
};

Projects.propTypes = {
  projects: React.PropTypes.array.isRequired
};

export default Projects;
