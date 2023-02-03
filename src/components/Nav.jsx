import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';
import About from './About';
// el navlink permite modificar los estilos al link.

function Nav({onSearch}) {
  return (
    <nav className="nav nav-tabs">
      {/* <NavLink to="/">
        <span className="navbar-brand">
           Weather App
        </span>
        </NavLink> */}
         <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Wheather App</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/about">Acerca de mi</a>
  </li>
        {/* <Link to= "/about">About</Link> */}
        <div className='search'>
          <SearchBar
          onSearch={onSearch}
        />
        </div>
    </nav>
  );
};

export default Nav;
