import db from "../config/db.js";
import bcrypt from "bcryptjs";


export const createManager = async (req, res) => {
const { name, email, password, branch } = req.body;
if (!name || !email || !password || !branch) return res.status(400).json({ error: 'Missing fields' });


const hashed = await bcrypt.hash(password, 10);
db.query("INSERT INTO users (name,email,password,role,branch) VALUES (?,?,?,?,?)", [name,email,hashed,'manager',branch], (err, result) => {
if (err) return res.status(500).json({ error: 'DB error or email exists' });
res.json({ id: result.insertId, name, email, branch });
});
};


export const listManagers = (req, res) => {
db.query("SELECT id,name,email,branch,role,created_at FROM users WHERE role='manager'", (err, results) => {
if (err) return res.status(500).json({ error: 'DB error' });
res.json(results);
});
};