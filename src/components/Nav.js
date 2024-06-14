import React from 'react';
import '../App.css';

function Nav(props) {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">{props.name}</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
