const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const movieRouter = require("./routes/movies");
const bookRouter = require("./routes/books");
const cartRouter = require("./routes/carts");
const wishlistRouter = require("./routes/wishlists");

mongoose.connect(
  process.env.URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => console.log(process.env.URL, err)
);

app.use("/movies", movieRouter);
app.use("/books", bookRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
