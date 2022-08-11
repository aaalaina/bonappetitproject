import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
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
