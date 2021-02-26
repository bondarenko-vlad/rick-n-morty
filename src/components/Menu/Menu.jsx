import React from 'react'
import './Menu.css'
import {NavLink} from 'react-router-dom'

function Menu() {
  
  return (
    <nav>
          <NavLink to='/'>Back to main</NavLink>
    </nav>
  );
}

export default Menu;
