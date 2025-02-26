import { db } from '../config/db.js';
import { Request, Response } from "express";
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { transporter } from '../config/nodemailer.js';
import { isValidEmail, isValidPassword } from "../utils/validators.js";

// SIGNUP
export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required.' });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({ message: 'Invalid email format.' });
    return;
  }

  if (!isValidPassword(password)) {
    res.status(400).json({ message: 'Password must be at least 4 characters long.' });
    return;
  }

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const existingUser = result.rows;

    if ((existingUser as any[]).length > 0) {
      res.status(409).json({ message: 'User already exists.' });
      return;
    }

    const hashedPassword = await hash(password, 10);
    const emailToken = jwt.sign({ email }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1h',
    });

    await db.query('INSERT INTO users (email, password, is_verified) VALUES ($1, $2, $3)', [
      email,
      hashedPassword,
      false
    ]);

    const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${emailToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Verify Your Email',
      text: `Click this link to verify your email: ${verificationLink}`,
    });

    res.status(201).json({ message: 'Signup successful! Please, verify your email!', token: emailToken });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required.' });
    return;
  }

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials.' });
      return;
    }

    if (!user.is_verified) {
      res.status(403).json({ message: 'Your account is not verified. Check your email.' });
      return;
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials.' });
      return;
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'Email is required.' });
    return;
  }

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    const resetToken = jwt.sign({ email }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1h',
    });

    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Reset Your Password',
      text: `Click this link to reset your password: ${resetLink}`,
    });

    res.status(200).json({ message: 'Password reset link sent to your email.' });
  } catch (error) {
    console.error('Error during forgot password:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// RESET PASSWORD
export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    res.status(400).json({ message: 'Token and new password are required.' });
    return;
  }

  if (!isValidPassword(newPassword)) {
    res.status(400).json({ message: 'Password must be at least 4 characters long.' });
    return;
  }

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { email: string };
    const hashedPassword = await hash(newPassword, 10);
    await db.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);

    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req: Request, res: Response) => {
  const token = req.query.token as string;

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { email: string };
    await db.query('UPDATE users SET is_verified = $1 WHERE email = $2', [true, email]);

    res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
};

// PROFILE
export const profile = async (req: Request, res: Response) => {
  if (req.user) {
    res.status(200).json({ message: 'User profile', user: req.user });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}