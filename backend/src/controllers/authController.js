const db = require("../config/db");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

// ==============================
// Register API
// ==============================
const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // Input Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Check if email already exists
        const [existingUser] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (existingUser.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Email already exists."
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert User
        const [result] = await db.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            userId: result.insertId
        });

    } catch (error) {

        console.error("Register Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==============================
// Login API
// ==============================
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Debug Logs
        console.log("==================================");
        console.log("LOGIN REQUEST RECEIVED");
        console.log("Request Body:", req.body);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("==================================");

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required."
            });
        }

        // Find User
        const [users] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        console.log("Users Found:", users);

        if (users.length === 0) {

            console.log("No user found with this email.");

            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const user = users[0];

        console.log("Database User:", user);

        // Compare Password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        console.log("Password Match:", isMatch);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password."
            });
        }

        // Generate JWT
        const token = generateToken(user.id);

        console.log("Login Successful!");
        console.log("Generated Token:", token);

        // Success Response
        return res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        console.error("Login Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    register,
    login
};