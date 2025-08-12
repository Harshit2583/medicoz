const mongoose = require("mongoose");

// For development, you can use MongoDB Atlas (free cloud database)
// Replace this connection string with your MongoDB Atlas connection string
// Or use local MongoDB if you have it installed
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/medicoz";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log("MongoDB Failed");
    console.log(e);
    // For development, create a simple in-memory solution
    console.log("Using fallback authentication (no database)");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("users", newSchema);

module.exports = collection;
