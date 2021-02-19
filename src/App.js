import './App.css';
import React, {useEffect, useState} from 'react';
import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';
import Home from './components/Home';
import Search from "./components/Search";
import Profile from "./components/Profile";
import RecipePage from "./components/RecipePage";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path="/signup" component={SignUp}/>
          <Route path="/home" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/recipe" component={RecipePage}/>
          <Route path="/" exact component={SignIn}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
