import React from "react";
import { NavLink } from "react-router-dom";
import characters from '../img/characters1.png'
import locations from '../img/locations1.jpg'
import episodes from '../img/episodes.jpg'

function FindAnything() {
  return (
    <div name='find' className="findAnything">
      <h2>FIND ANYTHING</h2>
      <div className="icons">
        <div className="icon">
          <img src={characters} alt='' />
          <NavLink to='/search'>characters</NavLink>
        </div>
        <div className="icon">
          <img src={locations} alt='' />
          <NavLink to='/search'>locations</NavLink>
        </div>
        <div className="icon">
          <img  src={episodes} alt='' />
          <NavLink to='/search'>episodes</NavLink>
        </div>
      </div>
    </div>
  );
}

export default FindAnything;
