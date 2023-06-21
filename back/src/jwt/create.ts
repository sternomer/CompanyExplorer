import jwt from 'jsonwebtoken';
import envConfig from '../config/env.config';

export const createToken = (userName: string, id: string) => {
  return jwt.sign({ userName, id }, envConfig.jwt.secret);
};
