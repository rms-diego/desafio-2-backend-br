import { IUser, IUserUpdate } from "../interface";
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

const update = async(id: number, { creditCard, userDocument, value }: IUserUpdate) => {
  if (creditCard) { 
    const creditCardEncoded = await  bcrypt.hash(creditCard, 5);
    return userModel.update(+id, { creditCard: creditCardEncoded });
  };
  
  if (userDocument) {
    const userDocumentEncoded = await bcrypt.hash(userDocument, 5);
    return userModel.update(+id, { userDocument: userDocumentEncoded });
  };

  return userModel.update(+id, { value });
}

export default {
  create,
  update
}