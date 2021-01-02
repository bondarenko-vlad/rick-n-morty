import React from "react";
import FindAnything from "./landingPage/FindAnything";
import Header from './landingPage/Header'
import './Main.css'

function Main() {
  return (
    <div className='main'>
        <Header />
        <FindAnything />
    </div>
  );
}

export default Main;