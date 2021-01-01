import React from 'react'
import './App.css';
import Header from './components/Header';
import FindAnything from './components/FindAnything';
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <FindAnything />
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
