const express = require("express");
const cors = require("cors");
require("dotenv").config();
var cookieParser = require('cookie-parser')

const { connection } = require("./config/db");
const { sellerRouter } = require("./routes/seller.routes");
const { buyerRouter } = require("./routes/buyer.routes");
const { authRouter } = require("./routes/auth.routes");
const { authenticate } = require("./middlewares/authenticate.middleware");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser())

app.use("/auth", authRouter);
app.use(authenticate);
app.use("/buy", buyerRouter);
app.use("/sell", sellerRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected to DB.");
  } catch (err) {
    console.log("Something went wrong while connecting to DB.", err);
  }
  console.log(`Server is running on port ${process.env.port}.`);
});
