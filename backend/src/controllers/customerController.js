import pool from "../config/db.js";


// export const createCustomer = (req, res) => {
// const { name, mobile, email, branch, tier, notes } = req.body;
// if (!name || !branch) return res.status(400).json({ error: 'Name and branch required' });


// db.query("INSERT INTO customers (name,mobile,email,branch,tier,notes) VALUES (?,?,?,?,?,?)", [name,mobile,email,branch,tier||'Silver',notes], (err, result) => {
// if (err) return res.status(500).json({ error: 'DB error' });
// res.json({ id: result.insertId, name, mobile, email, branch, tier: tier||'Silver' });
// });
// };


export const listCustomers = async (req, res) => {
// const user = req.user; // from middleware


    const sql = "SELECT * FROM customers";

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

};


// export const updateCustomerTier = (req, res) => {
// const user = req.user;
// };