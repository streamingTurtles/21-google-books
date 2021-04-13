const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: {type: String},
    title: {type: Array},
    authors: {type: Array},
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;