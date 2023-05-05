import React from 'react';
import {Link} from 'react-router-dom';

const NavBreadcrumbs = ({pageName}) => {
    return (
        <nav className='breadcrumbs'>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                  {pageName?pageName:'error'}
                </li>
            </ul>
        </nav>
    );
};

export default NavBreadcrumbs;