const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });
    movie.quantity = req.body.quantity;
    const a1 = await movie.save();
    res.status(200).json(a1);
  } catch (err) {
    res.status(404).send("Error");
  }
});

module.exports = router;
