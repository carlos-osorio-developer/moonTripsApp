import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <div>
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions" activeClassName="active">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </div>
);

export default Header;
