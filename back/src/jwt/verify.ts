import jwt from 'jsonwebtoken';
import envConfig from '../config/env.config';

export const verifyToken = (token: string) => {
  if (!token) {
    throw new Error('unauthorized');
  }

  const user = jwt.verify(token, envConfig.jwt.secret);

  if (!user) {
    throw new Error('unauthorized');
  }
  return user;
};
