import './App.css';
import React, {useEffect, useState} from 'react';
import SignIn from './components/Registration/SignIn'
import SignUp from './components/Registration/SignUp'
import Home from './components/Home/Home'

function App() {
  return (
    <div>
      {/* Insert routing here */} 
      {/*putting home here for now*/}
      <Home/>
    </div>
  )
}

export default App;
