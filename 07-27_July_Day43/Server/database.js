const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect(
      "mongodb://aryanbarbate3_db_user:tbyDoFtEw0BgKPS9@ac-tlr3yly-shard-00-00.hzcvbiy.mongodb.net:27017,ac-tlr3yly-shard-00-01.hzcvbiy.mongodb.net:27017,ac-tlr3yly-shard-00-02.hzcvbiy.mongodb.net:27017/?ssl=true&replicaSet=atlas-t2i980-shard-0&authSource=admin&appName=Books-management",
    )
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed");
      console.log(err);
    });
};

module.exports = databaseConnection;
