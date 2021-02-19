import './App.css';
import React, {useEffect, useState} from 'react';
import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Profile from "./components/Profile";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/home" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" exact component={SignIn}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
