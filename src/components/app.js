import React from 'react';
import Header from './header/header';
import Social from './social/social';
import Projects from './projects/projects';
import Footer from './footer/footer';
import projects from '../model/projects';
import '../styles/main.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Social />
        <Projects projects={projects} />
        <Footer />
      </div>
    );
  }
}
