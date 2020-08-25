import React from 'react';
import {
  Link
} from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-contents">
        <p className='home'>
          <Link id="homeLink" to="/">Just Another...</Link>
        </p>
        <ul className='list'>
          <li className='list-item active'><Link className="pageLinks" to="/Calculator">Calculator</Link></li>
          
          <li className='list-item'><Link className="pageLinks" to="/Stopwatch">Stopwatch</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar