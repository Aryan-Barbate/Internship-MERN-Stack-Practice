const express = require("express");

const router = express.Router();

const {
    handleAddBookController,
} = require("./bookController");

router.get("/getmsg", (req, res) => {
    res.send("Response from Book Router");
});

router.post("/addBook", handleAddBookController);

module.exports = router;