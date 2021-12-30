const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  order: [String],
  total: Number,

});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;