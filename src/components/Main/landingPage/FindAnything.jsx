import React from "react";
import { NavLink } from "react-router-dom";
import characters from "../../../img/characters1.png";
import locations from "../../../img/locations1.jpg";
import episodes from "../../../img/episodes.jpg";

function FindAnything() {
  return (
    <div name="find" className="findAnything">
      <h2>FIND ANYTHING</h2>
      <div className="icons">
        <div className="icon">
          <NavLink to="/character">
            <img src={characters} alt="" />
          </NavLink>
          <NavLink to="/character">characters</NavLink>
        </div>
        <div className="icon">
          <NavLink to="/location">
            <img src={locations} alt="" />
          </NavLink>
          <NavLink to="/location">locations</NavLink>
        </div>
        <div className="icon">
          <NavLink to="/episode">
            <img src={episodes} alt="" />
          </NavLink>
          <NavLink to="/episode">episodes</NavLink>
        </div>
      </div>
    </div>
  );
}

export default FindAnything;
