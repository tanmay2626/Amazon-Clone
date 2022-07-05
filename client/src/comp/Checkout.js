import React from "react";
import "../css/Checkout.css";
import { Divider } from "@mui/material";
import CartItem from "./CartItem";
import { useStateValue } from "../state/StateProvider";
import Payment from "./Payment";

const Checkout = (props) => {
  const [{ cart }] = useStateValue();

  const add_prices = () => {
    var total = 0;
    cart.forEach((e) => {
      total += e.price;
    });
    return total;
  };
  const total = add_prices();

  return (
    <div className="checkout">
      <span>Checkout {"(" + cart.length + " items)"}</span>
      <div className="checkout-wrap">
        <div>
          <div className="sec">
            <div className="sec-L">
              <p>Delivery Address</p>
            </div>
            <div className="sec-R">
              <p>
                Plot - 72A , Redcherry Housing Society , FC Road , Pune , Maharashtra 
              </p>
            </div>
          </div>
          <Divider />
          <div className="sec">
            <div className="sec-L">
              <p>Review Items and Delivery</p>
            </div>
            <div className="sec-R">
              {cart.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    id={item.id}
                    product_name={item.product_name}
                    rating={item.rating}
                    price={item.price}
                    product_img={item.product_img}
                  />
                );
              })}
            </div>
          </div>
          <Divider />
          <div className="sec">
            <div className="sec-L">
              <p>Payment Method</p>
            </div>
            <div className="sec-R">
              <Payment cartTotal={total} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
