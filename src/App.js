import React from 'react'
import './css/App.css';
import Navigation from './comp/Navigation';
import Home from './comp/Home';
import Checkout from './comp/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' exact element={<Checkout />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
