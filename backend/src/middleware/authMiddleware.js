const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {

    try {

        // Get Authorization Header
        const authHeader = req.headers.authorization;

        // Check if token exists
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided."
            });
        }

  // Extract Token
const token = authHeader.split(" ")[1];

console.log("Authorization Header:", authHeader);
console.log("Token:", token);
console.log("JWT Secret:", process.env.JWT_SECRET);

// Verify Token
const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
);

console.log("Decoded:", decoded);

        // Attach user info to request
        req.user = decoded;

        // Continue to next middleware/controller
        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });

    }

};

module.exports = authenticateUser;