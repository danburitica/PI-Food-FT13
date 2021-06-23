import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import Search from '../Search/Search.jsx';

export default function Navbar() {
    return (
        <div className="navbar">
            <div>
                <NavLink exact to="/" ><span className='brand-text'>Let's Cook</span></NavLink>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/recipes" >Explore Recipes</NavLink>
                        <NavLink to="/create" >Create a Recipe</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}