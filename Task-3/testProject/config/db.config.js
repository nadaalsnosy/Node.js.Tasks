function connectDB() {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/todos");
  mongoose.connection.once("connected", () => console.log("test connection"));
}

module.exports = { connectDB };
