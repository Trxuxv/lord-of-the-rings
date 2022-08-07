import Home from './pages/home';
import Auth from './auth';
import React from 'react';
import './App.css';

if (!localStorage.getItem("email") && !localStorage.getItem("name")) {
  var LoggedIn = false
} else {
  LoggedIn = true
}

export default function App() {

  const show = LoggedIn ? <Home /> : <Auth />

  return (
    <div className="App">
      {show}
    </div>
  );
}