import express from "express";
import {  listCustomers } from "../controllers/customerController.js";
import { verifyToken } from "../middleware/authMiddleware.js";


const router = express.Router();


router.use(verifyToken);
// router.post('/', createCustomer);
router.get('/', listCustomers);
// router.put('/:id/tier', updateCustomerTier);


export default router;