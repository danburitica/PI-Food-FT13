import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='navbar-left'>
                <Link to="/" ><span className='brand-text-navbar'>Let's Cook</span></Link>
            </div>
            <nav className='navbar-right'>
                <ul className="list">
                    <li className="list-item">
                        <Link to="/recipes" >Explore Recipes</Link>
                        <Link to="/create" >Create a Recipe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}