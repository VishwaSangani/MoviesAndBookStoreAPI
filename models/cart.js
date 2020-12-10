const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  cartQuantity: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
