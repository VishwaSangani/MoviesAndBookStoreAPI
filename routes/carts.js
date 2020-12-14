const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Cart.findOne({ id: req.params.id });
    res.status(200).json(item);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const item = new Cart({
    productId: req.body.productId,
    category: req.body.category,
    cartQuantity: req.body.cartQuantity,
    id: Math.ceil(Math.random() * 100000),
  });
  try {
    const a1 = await item.save();
    res.status(200).json(a1);
  } catch (err) {
    res.status(404).send(`ERROR ${err}`);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await Cart.findOne({ id: req.params.id });
    item.cartQuantity = req.body.cartQuantity;
    const a1 = await item.save();
    res.status(200).json(a1);
  } catch (err) {
    res.status(404).send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Cart.findOneAndRemove({ id: req.params.id });
    // const a1 = await item.remove();
    res.json(item);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

module.exports = router;
