const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
