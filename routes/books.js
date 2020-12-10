const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    res.status(200).json(book);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    book.quantity = req.body.quantity;
    const a1 = await book.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
