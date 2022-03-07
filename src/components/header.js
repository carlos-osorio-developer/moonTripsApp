import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const links = [
    {
      id: 1,
      name: 'Rockets',
      path: '/',
    },
    {
      id: 2,
      name: 'Missions',
      path: '/missions',
    },
    {
      id: 3,
      name: 'Profile',
      path: '/profile',
    },
  ];

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>MoonTrips App</h1>
          </Link>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
