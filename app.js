const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com",
    },
  },
  servers: [
    {
      url: "https://moviesandbooksapi.herokuapp.com",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const movieRouter = require("./routes/movies");
const bookRouter = require("./routes/books");
const cartRouter = require("./routes/carts");
const wishlistRouter = require("./routes/wishlists");

mongoose.connect(
  "mongodb+srv://admin:Password12$@cluster0.s3twr.mongodb.net/StoreDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => console.log(process.env.URL, err)
);

app.use("/movies", movieRouter);
app.use("/books", bookRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
