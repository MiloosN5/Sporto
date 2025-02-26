import express from 'express';
import { sendEmail, subscribe } from '../controllers/contactController.js';

const router = express.Router();

router.post('/send-email', sendEmail);
router.post('/subscribe', subscribe);

export default router;
