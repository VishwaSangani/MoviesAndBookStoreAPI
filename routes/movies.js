const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API to manage movies.
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Retrieve a list of movies.
 *     tags:
 *     - Movies
 *     description: Retrieve a list of movies from databse.
 *     responses:
 *       200:
 *         description: A list of movies.
 */
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Retrieve a single movie.
 *     tags:
 *     - Movies
 *     description: Retrieve a single movie.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the movie to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single movies.
 */
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update quantity of a single movie.
 *     tags:
 *     - Movies
 *     description: Update quantity of a single movie.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the movie.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: Movie quantity.
 *                 example: 10
 *     responses:
 *       200:
 *         description: Updated quantity of movie.
 */
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
