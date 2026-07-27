const express = require("express");
const databaseConnection = require("./database"); 
const app = express();

databaseConnection(); 

app.get("/book", (req, res) => {
    res.send("Building Book Management App");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});