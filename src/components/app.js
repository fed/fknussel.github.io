import React from 'react';
import Hero from './hero';
import Social from './social';
import Projects from './projects';
import Footer from './footer';

// data source
import projects from 'model/projects';

// global styles
import 'styles/main.css';

const App = () => (
  <section>
    <Hero />
    <Social />
    <Projects projects={projects} />
    <Footer />
  </section>
);

export default App;
