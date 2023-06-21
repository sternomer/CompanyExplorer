import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../../jwt/verify';

export const isAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization as string;
  try {
    const user = verifyToken(token!);

    req.body.userFromToken = user;

    next();
  } catch (error) {
    res.status(401).send({ message: 'unauthorized' });
  }
};
