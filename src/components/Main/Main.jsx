import React from "react";
import { animateScroll } from "react-scroll";
import FindAnything from "./landingPage/FindAnything";
import Header from './landingPage/Header'
import './Main.css'

function Main() {
  animateScroll.scrollToTop()
  return (
    <div className='main'>
        <Header />
        <FindAnything />
    </div>
  );
}

export default Main;