import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="div1">
        <ul className='div1-ul'>
          <li><Link to="/Recipes">recipes</Link></li>
          <li><Link to="/Shop">shop</Link></li>
          <li><Link to="/Contact">contact</Link></li>
        </ul>
      </div>
      <div className="div2">
      <h2><Link to="/">Bon Appétit</Link></h2>
      </div>
    </div>
  )
}
