import React from "react";
import "./css/App.css";
import Navigation from "./comp/Navigation";
import Home from "./comp/Home";
import Cart from "./comp/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./comp/SignIn";
import Register from "./comp/Register";
import Checkout from "./comp/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./comp/Orders";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51L66RUSIG3JgLYVPrFgtrQTcFKRGKnfAygfS6ksaBhpwxzsOJkoB0jK762tFtoJogBvipvLbM9OF6SnJ1CTlx61O00axCujx2P"
  );

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/orders" exact element={<Orders />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/register" exact element={<Register />} />
          {/* Todo - Setup Profile page */}
          {/* Todo - Setup Failure page */}
          {/* Todo - Setup Product View page */}
          <Route
            path="/checkout"
            exact
            element={
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
