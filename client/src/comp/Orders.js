import React from "react";
import "../css/Orders.css";
import { useStateValue } from "../state/StateProvider";
import { Divider } from "@mui/material";
import Order from "./Order";

const Orders = (props) => {
  const [{ user }] = useStateValue();

  return (
    <div className="orders">
    <div className="orders-head">
    <h2>Order History</h2>
    </div>
      <div className="orders-wrap">
        {user.orders.map((orders) => {
          return (
            <div key={orders._id}>
              <h3 className="order-text">
                {orders.billing_date} | Transaction ID : {orders.transaction_id}
              </h3>
              {orders.product.map((products) => {
                return (
                  <Order
                    key={products._id}
                    _id={products._id}
                    product_name={products.product_name}
                    rating={products.rating}
                    price={products.price}
                    product_img={products.product_img}
                    hideButton
                  />
                );
              })}
              <h4 className="order-text">
                Total Bill Amount : ₹
                {(orders.billing_amount / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h4>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
