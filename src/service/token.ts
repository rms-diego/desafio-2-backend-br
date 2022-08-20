import jwt from 'jsonwebtoken';
import { IUser } from '../interface';

const { SECRET } = process.env;

const encode = (payload: IUser) => {
  if (SECRET) return jwt.sign({ ...payload }, SECRET, { algorithm: 'RS256', expiresIn: '365d' });
} 

const decode = (token: string) => {
  try {
    if (SECRET)   return jwt.verify(token, SECRET);
  } catch (error) {
    throw new Error('Token invalido');
  }
}

export default {
  encode,
  decode
}