const Book = require("../models/book");

const handleAddBookController = async (req, res) => {
  try {
    const newBook = new Book({
      bookName: req.body.bookName,
      bookAuthor: req.body.bookAuthor,
      bookPrice: req.body.bookPrice,
      publishDate: req.body.publishDate, // optional
    });

    const savedBook = await newBook.save();

    return res.status(201).json({
      Message: "Book added successfully!",
      data: savedBook,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const handleGetAllBookController = async (req, res) => {
  try {
    const bookList = await Book.find({});

    return res
      .status(200)
      .json({
        Message: "Book Details retrieved successfully",
        BookList: bookList,
      });
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

const handleDeleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await Book.deleteOne({ _id: id });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ Message: "Book not found" });
    }

    return res.status(200).json({ Message: "Book deleted successfully" });
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

module.exports = {
  handleAddBookController,
  handleGetAllBookController,
  handleDeleteBookController,
};
