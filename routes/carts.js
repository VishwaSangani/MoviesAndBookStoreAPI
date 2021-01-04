const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API to manage cart.
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Retrieve products from a cart.
 *     tags:
 *     - Cart
 *     description: Retrieve a cart products from databse.
 *     responses:
 *       200:
 *         description: Products in cart.
 */
router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /cart/{id}:
 *   get:
 *     summary: Retrieve single product from cart using productID.
 *     tags:
 *     - Cart
 *     description: Retrieve single product from cart using productID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single product from cart.
 */
router.get("/:id", async (req, res) => {
  try {
    const item = await Cart.findOne({ id: req.params.id });
    res.status(200).json(item);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add product to cart.
 *     tags:
 *     - Cart
 *     description: Add movie or book to cart.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *                 description: Numeric ID of the product.
 *                 example: 1
 *               category:
 *                 type: string
 *                 description: Category of the product.
 *                 example: "Movie"
 *               cartQuantity:
 *                 type: integer
 *                 description: Quantity of product.
 *                 example: "120.72.90.82"
 *     responses:
 *       200:
 *         description: Added product to cart.
 */
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

/**
 * @swagger
 * /cart/{id}:
 *   put:
 *     summary: Update quantity of product in cart.
 *     tags:
 *     - Cart
 *     description: Update quantity of a single movie or book in cart.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cartQuantity:
 *                 type: integer
 *                 description: Product quantity.
 *                 example: 3
 *     responses:
 *       200:
 *         description: Updated quantity of movie.
 */
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

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Remove product from cart.
 *     tags:
 *     - Cart
 *     description: Remove movie or book from cart.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product to remove.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product removed from cart.
 */
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
