import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('experiences')}>Experiences</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
      </div>
    </nav>
  );
};

export default Navbar;
