import React from 'react';
import {
  Link,
  NavLink
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
          <li className='list-item'><NavLink activeClassName='active' className="pageLinks" to="/Calculator">Calculator</NavLink></li>
          
          <li className='list-item'><NavLink activeClassName='active' className="pageLinks" to="/Stopwatch">Stopwatch</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar