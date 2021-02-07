import React, { createRef } from 'react'
import img from '../../img/burger1.png'
import './Menu.css'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

let ref = createRef()
function Menu() {
  let [isOpened, setValue] = useState(false)
  let toggleState = () => {
    setValue(!isOpened)
  }
  return (
    <nav>
      <div ref={ref} className='open-menu'>
        <div className='menu' onClick={toggleState}>
          <img src={img} alt=""/>
          <p>MENU</p>
        </div>
        {isOpened?<div onClick={toggleState} className='opened'><NavLink to='/'>main</NavLink><NavLink to='/contact'>contact</NavLink></div>:undefined}
      </div>
    </nav>
  );
}

export default Menu;
