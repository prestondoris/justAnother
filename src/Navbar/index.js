import React from 'react';
import {
  Link,
  NavLink
} from "react-router-dom";
import './Navbar.css'

function Index() {
  return (
    <nav className="navbar">
      <div className="navbar-contents">
        <p className='home'>
          <Link id="homeLink" to="/">UtilWeb.io</Link>
        </p>
        <ul className='list'>
          <li className='list-item'><NavLink activeClassName='active' className="pageLinks" to="/Calculator">Calculator</NavLink></li>
          
          <li className='list-item'><NavLink activeClassName='active' className="pageLinks" to="/Stopwatch">Stopwatch</NavLink></li>

          <li className='list-item'><NavLink activeClassName='active' className="pageLinks" to="/Mortgage">Mortgage</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Index