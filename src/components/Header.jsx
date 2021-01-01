import React from "react";
import {Link} from 'react-scroll'
import img from "../img/ricknmorty.png";
import Menu from "./Menu";

function Header() {
  return (
    <header>
        <Menu />
      <img src={img} alt="rick and morty" />
      <div className="heading-search">
        <h1>RICK AND MORTY DATABASE</h1>
        <Link to='find' className="search" spy={true} smooth={true} offset={50} duration={500}>SEARCH</Link>
      </div>
    </header>
  );
}

export default Header;
