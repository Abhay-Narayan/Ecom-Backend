const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv=require('dotenv');
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoute=require('./routes/cart');
const orderRoute=require('./routes/order');
const stripeRoute=require('./routes/stripe')
const cors=require('cors');

dotenv.config();    
app.use(express.json())
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfull"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);


app.listen(process.env.PORT, () => {
  console.log("App has started at PORT 5000");
});




