const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function databaseConnection() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Conntected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = {
  databaseConnection,
};
