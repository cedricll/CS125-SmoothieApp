import './App.css';
import React, {useEffect, useState} from 'react';
import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Profile from "./components/Profile";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div class="App">
        <Navigation/>
        <br/><br/><br/><br/><br/><br/><br/>
        <Route path="/" exact component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
