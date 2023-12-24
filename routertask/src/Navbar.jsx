

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Allcourse</Link></li>
        <li><Link to="/fsd">Fsd</Link></li>
        <li><Link to="/datascience">Data Science</Link></li>
        <li><Link to="/cybersecurity">Cybersecurity</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
