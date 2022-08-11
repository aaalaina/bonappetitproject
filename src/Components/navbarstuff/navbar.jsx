import React from 'react';
import {Link} from 'react-router-dom';
import 'navbar.css';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="div1">
        <ul>
          <li><Link to="/Recipes">Recipes</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
      <div className="div2">
      <h2>Bon Appétit</h2>
      </div>
    </div>
  )
}
