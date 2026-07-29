const express = require("express");

const router = express.Router();

const { handleAddBookController, handleGetAllBookController, handleDeleteBookController } = require("../Controller/bookController");

router.get("/getmsg", (req, res) => {
  res.send("Response from Book Router");
});

router.post("/addBook", handleAddBookController);
router.get("/getBook", handleGetAllBookController);
router.delete("/deleteBook",handleDeleteBookController)

module.exports = router;
