import React from 'react';
import Showcase from 'components/showcase/showcase';
import styles from './projects.css';

const Projects = ({ projects }) => (
  <section className={styles.projects}>
    {
      projects.map((project, index) => (
        <article key={index} className={styles.project}>
          <a name={project.id} />

          <Showcase
            image={project.image}
            title={project.title}
            content={project.content}
            links={project.links} />
        </article>
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
