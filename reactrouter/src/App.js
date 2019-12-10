import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import {BrowserRouter , Route , Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>

      <Navbar/>
      <Switch>
     
      <Route path = "/" exact component = {Home} />
      <Route path = "/About" component = {About} />
      <Route path = "/Contect" component = {Contect} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
