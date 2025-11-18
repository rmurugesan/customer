// server.js
import express from 'express';
import cors from "cors";
import pool from "./src/config/db.js";// Import the database pool
import authRoutes from "./src/routes/authRoutes.js";
import customerRoutes from "./src/routes/customerRoutes.js"
// Initialize Express App
const app = express();
const PORT = 5000;
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

// --- GET Route to Fetch All Users ---
app.get('/api/users', async (req, res) => {
    // ⚠️ Best practice is to list columns explicitly, avoiding sensitive data
    const sql = "SELECT * FROM users";

    try {
        // Execute the query using await. Destructure to get the rows array.
        const [rows] = await pool.query(sql);
        
        // Return the results as a JSON array
        return res.status(200).json(rows);

    } catch (error) {
        // Handle database errors
        console.error("Error fetching all users:", error.message);
        return res.status(500).json({ 
            error: "Failed to retrieve user data.",
            details: error.code // Useful for debugging (e.g., 'ER_NO_SUCH_TABLE')
        });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Test the API at: http://localhost:3000/api/users');
});