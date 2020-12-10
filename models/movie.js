const mongoose = require("mongoose");
// const { Mongoose } = require("mongoose");
const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  yearOfRelease: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  imdbRatings: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
