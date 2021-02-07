import React from 'react'
import './App.css';
import Main from './components/Main/Main'
import Footer from './components/Footer'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Route } from 'react-router-dom';
import SearchContainer from './components/Search/SearchContainer';



function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Route exact path='/' component={Main} />
        <Route path='/characters' render={()=><SearchContainer />} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
