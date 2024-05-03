import React from 'react';
import Navbar from './components/navbar';
import {HeroSparkles} from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/project';
import Contact from './components/contact';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" className="homeBackground">
          <HeroSparkles />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="skills" className="skills">
          <Skills />
        </section>
        <section id="projects" className="projects">
          <Projects />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;