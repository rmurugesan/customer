import pool from "../config/db.js";


export const createCustomer = async(req, res) => {
 // Destructure necessary fields from the request body
    const { name, mobile, email, branch, tier, notes} = req.body;

    // Basic validation
    if (!name || !email ) {
        return res.status(400).json({ 
            message: 'Missing required fields: name, email, and password.' 
        });
    }

    // ⚠️ NOTE: In a real app, you MUST hash the password here 
    // using a library like bcrypt before inserting!

    try {
        const query = `
            INSERT INTO customers (name, mobile, email, branch, tier, notes)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        // The values array must match the order of the placeholders in the query
        const values = [
            name, 
            mobile,
            email, 
            branch | null , 
            tier || 'Silver', // Use 'manager' if role is not provided
            notes || null     // Use NULL if branch is not provided
        ];

        // Execute the query using the connection pool
        const [result] = await pool.execute(query, values);

        // Send a successful response back to the client
        res.status(201).json({ 
            message: 'Customer inserted successfully!',
            userId: result.insertId, // The ID of the newly inserted row
            data: req.body
        });

    } catch (error) {
        console.error('Database INSERT Error:', error);
        
        // Handle specific unique key violation (e.g., duplicate email)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                message: 'Error: This email address is already registered.'
            });
        }
        
        res.status(500).json({ 
            message: 'Internal server error while creating customer.',
            error: error.message
        });
    }


};


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