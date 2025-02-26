import { Request, Response } from 'express';
import { transporter } from '../config/nodemailer.js';

// SUBSCRIBE
export const subscribe = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Subscription Confirmation',
    text: `Hello ${name}, thank you for subscribing!`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).send({ error: 'Error subscribing' });
  };
};

// SEND EMAIL
export const sendEmail = async (req: Request, res: Response) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Error sending email' });
  };
};