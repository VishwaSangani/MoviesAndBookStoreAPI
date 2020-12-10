const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");

router.get("/", async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.status(200).json(items);
  } catch (err) {
    res.send("Error" + err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const item = await Wishlist.findOne({ id: req.params.id });
//     res.status(200).json(item);
//   } catch (err) {
//     res.send("Error" + err);
//   }
// });

router.post("/", async (req, res) => {
  const item = new Wishlist({
    productId: req.body.productId,
    category: req.body.category,
    ipAddress: req.body.ipAddress,
    id: Math.ceil(Math.random() * 100000),
  });
  try {
    const a1 = await item.save();
    res.status(200).json(a1);
  } catch (err) {
    res.send(`ERROR ${err}`);
  }
});

//   router.patch("/:id", async (req, res) => {
//     try {
//       const item = await Wishlist.findOne({ id: req.params.id });
//       item.cartQuantity = req.body.cartQuantity;
//       const a1 = await item.save();
//       res.status(200).json(a1);
//     } catch (err) {
//       res.send("Error");
//     }
//   });

router.delete("/:id", async (req, res) => {
  try {
    const item = await Wishlist.findOne({ id: req.params.id });
    const a1 = await item.remove();
    res.json(a1);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

module.exports = router;
