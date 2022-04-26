import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';


import Header from './components/Header.js/index';
import Footer from './components/Footer.js/index.js';
import Login from './pages/login.js'
import './App.css';


function App() {
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUser(newUser)

  }

  if (user === null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle }/>
    )
  }

  return (
  <BrowserRouter>
      <Header user={user}/>
      
      <Routes />
      
      <Footer/>
  </BrowserRouter>
  )
}

export default App;
