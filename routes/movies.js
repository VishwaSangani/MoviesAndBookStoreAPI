const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });
    res.status(200).json(movie);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });
    movie.quantity = req.body.quantity;
    const a1 = await movie.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
