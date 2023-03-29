const mongoose = require("mongoose");

const buyerSchema = mongoose.Schema({
  quantity: Number,
  price: Number,
  userID: String,
});

const BuyerModel = mongoose.model("buyer", buyerSchema);

module.exports = { BuyerModel };
