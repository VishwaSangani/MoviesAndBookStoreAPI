const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");

/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: API to manage wishlist.
 */

/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Retrieve a wishlist.
 *     tags:
 *     - Wishlist
 *     description: Retrieve a wishlist from databse.
 *     responses:
 *       200:
 *         description: A wishlist.
 */
router.get("/", async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

/**
 * @swagger
 * /wishlist:
 *   post:
 *     summary: Add product to wishlist.
 *     tags:
 *     - Wishlist
 *     description: Add movie or book to wishlist.
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
 *               ipAddress:
 *                 type: string
 *                 description: IP Address of user.
 *                 example: "120.72.90.82"
 *     responses:
 *       200:
 *         description: Added product to wishlist.
 */
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
    res.status(404).send(`ERROR ${err}`);
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

/**
 * @swagger
 * /wishlist/{id}:
 *   delete:
 *     summary: Remove product from wishlist.
 *     tags:
 *     - Wishlist
 *     description: Remove movie or book from wishlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product to remove.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product removed from wishlist.
 */
router.delete("/:id", async (req, res) => {
  try {
    const item = await Wishlist.findOne({ id: req.params.id });
    const a1 = await item.remove();
    res.status(200).json(a1);
  } catch (err) {
    res.status(404).send("Error" + err);
  }
});

module.exports = router;
