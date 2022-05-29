import React from 'react'
import './css/App.css';
import Navigation from './comp/Navigation';
import Home from './comp/Home';
import Checkout from './comp/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './comp/SignIn';
import Register from './comp/Register';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' exact element={<Checkout />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
