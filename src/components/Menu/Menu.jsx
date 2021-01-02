import React from 'react'
import img from '../../img/burger1.png'
import './Menu.css'

function Menu() {
  return (
    <nav>
      <div className='menu'>
        <img src={img} alt=""/>
        <p>MENU</p>
      </div>
    </nav>
  );
}

export default Menu;
