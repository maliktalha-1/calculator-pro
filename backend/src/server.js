const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const calculationRoutes = require("./routes/calculationRoutes");
const authenticateUser = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/calculations", calculationRoutes);

// Protected Test Route
app.get("/api/protected", authenticateUser, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected Route Accessed Successfully",
        user: req.user
    });
});

// Home Route
app.get("/", (req, res) => {
    res.send("Calculator Backend API is Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});