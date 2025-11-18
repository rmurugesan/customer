// db.js
import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config();

// Create the connection pool configuration
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'node_user',
    password: process.env.DB_PASSWORD || 'SecurePass123',
    database: process.env.DB_NAME || 'customer_seg', // Use your database name
    connectionLimit: 10
});

console.log("Database connection pool established.");

// Export the pool to be used in your routes
export default pool;