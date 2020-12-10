const mongoose = require("mongoose");
// const { Mongoose } = require("mongoose");
const BooksSchema = new mongoose.Schema({
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
  preview: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  goodreadsRatings: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", BooksSchema);
