import React from 'react'
import './css/App.css';
import Navigation from './comp/Navigation';
import Home from './comp/Home';
import Cart from './comp/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './comp/SignIn';
import Register from './comp/Register';
import Profile from './comp/Profile';
import Checkout from './comp/Checkout';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/register' exact element={<Register />} />
        {/* Todo - Setup Profile page */}
        <Route path='/profile' exact element={<Profile/>} /> 
        <Route path='/checkout' exact element={<Checkout />} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
