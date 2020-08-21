import React from 'react';
import {
  Link
} from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-contents">
        <p>
          <Link id="homeLink" to="/">Just Another...</Link>
        </p>
        <ul>
          <li><Link className="pageLinks" to="/Calculator">Calculator</Link></li>
          
          <li><Link className="pageLinks" to="/Stopwatch">Stopwatch</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar