import React from 'react';
import './Home.css'; // kamu bisa styling semua section di sini

import Projects from './Projects';
import Profile from './Profile';
import Experiences from './Experiences';

const Home = () => {
  return (
    <div>
      <section id="about">
        <Profile />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
