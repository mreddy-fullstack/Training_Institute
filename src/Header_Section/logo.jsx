import React from 'react';
import logo from '../Institute_releated_Images/institute_logo.jpeg';
import './logo_page.css';

const Logo_Page = () => {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Training Institute home">
        <img src={logo} className="App-logo" alt="" />
        <span className="brand-name">Training Institute</span>
      </a>
      <nav className="site-navigation" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#services">Programs</a>
        <a href="#courses">Upcoming batches</a>
        <a className="navigation-cta" href="#contact">Contact us</a>
      </nav>
    </header>
  );
};

export default Logo_Page;
