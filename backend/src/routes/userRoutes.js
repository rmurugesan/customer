import express from "express";
import { createManager, listManagers } from "../controllers/userController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();


// Only admin can create managers and list them
router.post('/', verifyToken, isAdmin, createManager);
router.get('/', verifyToken, isAdmin, listManagers);


export default router;