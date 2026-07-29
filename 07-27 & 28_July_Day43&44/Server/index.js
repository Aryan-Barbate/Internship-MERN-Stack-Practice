const express = require("express");
const databaseConnection = require("./database");
const app = express();

app.use(express.json());

const router = require("./route/bookRouter");

databaseConnection();

app.use("/book", router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
