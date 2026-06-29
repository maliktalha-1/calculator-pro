const express = require("express");
const router = express.Router();

const authenticateUser = require("../middleware/authMiddleware");
const {
    createCalculation,
    getCalculations,
    deleteCalculation,
    clearHistory
} = require("../controllers/calculationController");

// Create Calculation
router.post("/", authenticateUser, createCalculation);

// Get Calculation History
router.get("/", authenticateUser, getCalculations);

// Delete a Single Calculation
router.delete("/:id", authenticateUser, deleteCalculation);

//Clear Entire History
router.delete("/", authenticateUser, clearHistory);

module.exports = router;