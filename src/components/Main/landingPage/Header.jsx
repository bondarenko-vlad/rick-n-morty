import React from "react";
import {Link} from 'react-scroll'

function Header() {
  return (
    <header>
        <h1>RICK AND MORTY DATABASE</h1>
        <Link to='find' className="search" spy={true} smooth={true} offset={50} duration={500}>SEARCH</Link>
    </header>
  );
}

export default Header;
