import { IUser } from "../interface";
import bcrypt from 'bcrypt'
import userModel from "../models/userModel";
import token from "./token";

const create = async ({ userDocument, creditCard, value }: IUser) => {
  const userDocumentEncoded = await bcrypt.hash(userDocument, 5);
  const creditCardEncoded = await  bcrypt.hash(creditCard, 5);

  const userCreated = await userModel.create({ 
    userDocument: userDocumentEncoded,
    creditCard: creditCardEncoded,
    value
  });

  const tokenCreated = token.encode(userCreated);

  return tokenCreated;
}


export default {
  create,
}