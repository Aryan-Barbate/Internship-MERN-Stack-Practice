//add book
const handleAddBookController = async (req, res) => {
  try {
    const data = req.body;
    let book = await Book.insertOne(data);

    return res.status(200).json({ Message: "Details Added" });
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

module.exports = { handleAddBookController };