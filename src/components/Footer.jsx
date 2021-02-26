import React from "react";
import { NavLink } from "react-router-dom";



function Footer(props) {
  return (
    <footer>
        <p>Like it? <span className='contact-me' onClick={()=>props.setState(true)}>Contact me</span></p>
        
    </footer>
  );
}

export default Footer;
