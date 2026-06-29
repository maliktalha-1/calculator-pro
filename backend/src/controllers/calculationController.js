const db = require("../config/db");

const createCalculation = async (req, res) => {

    try {

        const { num1, num2, operation } = req.body;

        // Logged-in User
        const userId = req.user.id;

        // Validation
        if (
            num1 === undefined ||
            num2 === undefined ||
            !operation
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({
                success: false,
                message: "Please enter valid numbers."
            });
        }

        let result;

        switch (operation) {

            case "+":
                result = Number(num1) + Number(num2);
                break;

            case "-":
                result = Number(num1) - Number(num2);
                break;

            case "*":
                result = Number(num1) * Number(num2);
                break;

            case "/":

                if (Number(num2) === 0) {
                    return res.status(400).json({
                        success: false,
                        message: "Division by zero is not allowed."
                    });
                }

                result = Number(num1) / Number(num2);
                break;

            default:
                return res.status(400).json({
                    success: false,
                    message: "Invalid operation."
                });

        }

        const expression = `${num1} ${operation} ${num2}`;

        // Save into Database
        const [savedCalculation] = await db.query(
            `INSERT INTO calculations (user_id, expression, result)
             VALUES (?, ?, ?)`,
            [userId, expression, result]
        );

        return res.status(201).json({
            success: true,
            message: "Calculation saved successfully.",
            calculation: {
                id: savedCalculation.insertId,
                expression,
                result
            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getCalculations = async (req, res) => {

    try {

        const userId = req.user.id;

        const [calculations] = await db.query(
            `SELECT *
             FROM calculations
             WHERE user_id = ?
             ORDER BY created_at DESC`,
            [userId]
        );

        return res.status(200).json({
            success: true,
            count: calculations.length,
            calculations
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteCalculation = async (req, res) => {

    try {

        const userId = req.user.id;
        const calculationId = req.params.id;

        const [result] = await db.query(
            `DELETE FROM calculations
             WHERE id = ? AND user_id = ?`,
            [calculationId, userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Calculation not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Calculation deleted successfully."
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const clearHistory = async (req, res) => {

    try {

        const userId = req.user.id;

        await db.query(
            `DELETE FROM calculations
             WHERE user_id = ?`,
            [userId]
        );

        return res.status(200).json({
            success: true,
            message: "History cleared successfully."
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createCalculation,
    getCalculations,
    deleteCalculation,
    clearHistory
};