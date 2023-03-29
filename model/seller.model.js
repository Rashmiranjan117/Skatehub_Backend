const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  quantity: Number,
  price: Number,
  userID: String,
});

const SellerModel = mongoose.model("seller", sellerSchema);

module.exports = { SellerModel };
