import express from 'express';
import { signup, login, forgotPassword, resetPassword, profile } from '../controllers/authController.js';
import { verifyEmail } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/verify-email', verifyEmail);
router.get('/profile', authMiddleware, profile);

export default router;
