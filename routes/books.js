const express = require("express");
const router = express.Router();
const Book = require("../models/book");

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API to manage books.
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve a list of books.
 *     tags:
 *     - Books
 *     description: Retrieve a list of books from databse.
 *     responses:
 *       200:
 *         description: A list of books.
 */
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retrieve a single books.
 *     tags:
 *     - Books
 *     description: Retrieve a single books.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the books to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single books.
 */
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    res.status(200).json(book);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update quantity of a single book.
 *     tags:
 *     - Books
 *     description: Update quantity of a single book.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the book.
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
 *                 description: Book quantity.
 *                 example: 10
 *     responses:
 *       200:
 *         description: Updated quantity of book.
 */
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.params.id });
    book.quantity = req.body.quantity;
    const a1 = await book.save();
    res.status(200).json(a1);
  } catch (err) {
    res.status(404).send("Error");
  }
});

module.exports = router;
