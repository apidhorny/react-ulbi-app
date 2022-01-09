import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <NavLink className='navbar__link' to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink className='navbar__link' to='/posts'>
                        Posts
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink className='navbar__link' to='/about'>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
