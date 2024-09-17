const express = require("express");
const cors = require("cors");

// Import the routes
const razorpayRoutes = require("./razorpayRoutes");
const authRoutes = require("./authRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Use the routes
app.use("/api/razorpay", razorpayRoutes); // Prefix for Razorpay routes
app.use("/api/auth", authRoutes); // Prefix for Login/Signup routes

// Start server on a single port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
