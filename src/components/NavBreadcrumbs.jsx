import React from 'react';
import {Link} from 'react-router-dom';

const NavBreadcrumbs = () => {
  return (
    <nav className='breadcrumbs'>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          Текущая страница
        </li>
      </ul>
    </nav>
  );
};

export default NavBreadcrumbs;