const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("This is response from the express");
});

mongoose
  .connect(
    "mongodb+srv://aryanbarbate3_db_user:sxd3KGdQGiHH0mzr@cluster0.f4maqp0.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database connection error", err);
  });

app.listen(3000, () => {
  console.log("express is running on the port 3000");
});
