import pool from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
const { email, password } = req.body;

//  console.error("-------------Sucesss-----:",req.body);
 
     const sql = "SELECT * FROM users";

    try {
        // Execute the query using await. Destructure to get the rows array.
        const result = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
            
    // if (result.length === 0) return res.status(400).json({ error: "User not found" });

    const user = result[0][0];


    const valid = await bcrypt.compare(password, user.PASSWORD);


    if (!valid) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token, role: user.role });

 

    } catch (error) {
        // Handle database errors
        console.error("Error fetching all users:", error.message);
        return res.status(500).json({ 
            error: "Failed to retrieve user data.",
            details: error.code // Useful for debugging (e.g., 'ER_NO_SUCH_TABLE')
        });
    }
 


};