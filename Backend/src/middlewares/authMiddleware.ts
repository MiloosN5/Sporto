import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export interface UserJwtPayload extends jwt.JwtPayload {
  email: string;
  password: string;
}

// AUTH  MIDDLEWARE
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Please log in.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as UserJwtPayload;
    req.user = { email: decoded.email, password: decoded.password };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  };
};

