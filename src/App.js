import React from 'react'
import './App.css';
import Main from './components/Main/Main'
import Footer from './components/Footer'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Route } from 'react-router-dom';
import SearchContainer from './components/Search/SearchContainer';
import Modal from './components/Modal/Modal';
import {useState} from 'react'


function App(props) {
  let [isOpen, setState] = useState(false)
  
  return (
    <div className="App">
      <BrowserRouter>
       {isOpen ? <Modal setState={setState}/> : undefined }
        <Menu />
        <Route exact path='/' component={Main} />
        <Route exact path='/:params' render={()=><SearchContainer />} />
        <Footer setState={setState} />
      </BrowserRouter>
    </div>
  );
}

export default App;
