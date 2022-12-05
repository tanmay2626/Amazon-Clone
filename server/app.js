const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const stripe = require("stripe")(
  "sk_test_51L66RUSIG3JgLYVPiObvaUyFcq82dMpiQ1eXH0uPdALKzNBcgMebMCaomL1gUtdejvkrhTL3ouUva8nfGdokdKtt00f5zkSDa7"
);
const port = process.env.PORT || 8000
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://twaykar8:bobo2626@cluster0.kpikg.mongodb.net/amazondb?retryWrites=true&w=majority");

const ProductSchema = new mongoose.Schema({
  product_id: { type: String, require: true },
  product_name: { type: String, require: true },
  price: { type: Number, require: true },
  rating: { type: Number, require: true },
  product_img: { type: String, require: true },
});

const OrdersSchema = new mongoose.Schema({
  product: [ProductSchema],
  transaction_status: { type: String, require: true },
  transaction_id: { type: String, require: true },
  customer_name: { type: String, require: true },
  billing_amount: { type: Number, require: true },
  billing_address: { type: String, require: true },
  billing_date: { type: String, require: true },
  payment_type: { type: String, require: true },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  address: { type: String, require: true },
  orders: [OrdersSchema],
});

const User = mongoose.model("User", UserSchema);
const Order = mongoose.model("Order", OrdersSchema);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/register_user", (req, res) => {
  User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (foundUser) {
      res.json({
        status: false,
        message:
          "Your provided Email has already been used. Please use another email address.",
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        });
        newUser.save();
        res.json({ status: true, message: "User successfully registered." });
      });
    }
  });
});

app.post("/signin", (req, res) => {
  User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
        if (result === true) {
          res.json({ status: true, user: foundUser });
        } else {
          res.json({ status: false, message: "Your Password is incorrect" });
        }
      });
    } else {
      res.json({
        status: false,
        message: "We cannot find an account with that email address",
      });
    }
  });
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    payment_method_types: ["card"],
  });

  // If status 201 - OK then send
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post("/order_placed", (req, res) => {
  User.findById(req.body.user_id, (err, foundUser) => {
    if (foundUser) {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = new Date().toLocaleDateString("en-US", options);
      const newOrder = new Order({
        product: req.body.order_details.product,
        transaction_status: req.body.order_details.transaction_status,
        transaction_id: req.body.order_details.transaction_id,
        customer_name: req.body.order_details.customer_name,
        billing_amount: req.body.order_details.billing_amount,
        billing_address: req.body.order_details.billing_address,
        payment_type: req.body.order_details.payment_type,
        billing_date: date,
      });
      foundUser.orders.push(newOrder);
      newOrder.save();
      foundUser.save();
      res.send(foundUser);
    }
  });
});

app.listen(port, () => {
  console.log("Server running on port "+port);
});
