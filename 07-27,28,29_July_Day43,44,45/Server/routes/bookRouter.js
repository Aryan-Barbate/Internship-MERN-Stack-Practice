const express = require("express");

const router = express.Router();

const { handleAddBookController, handleGetAllBookController, handleDeleteBookController } = require("../controllers/bookController");

router.post("/", handleAddBookController);
router.get("/", handleGetAllBookController);
router.delete("/:id", handleDeleteBookController);

module.exports = router;
