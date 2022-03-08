import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import style from './header.module.scss';
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
        <nav className={style.container}>
          <div className={style.contentHolder}>
            <Link to="/" className={style.logo}>
              <img src={logo} alt="logo" />
              <h1 className={style.link}>MoonTrips App</h1>
            </Link>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.path} className={style.link}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
