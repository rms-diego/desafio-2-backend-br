import { IUser, IUserUpdate } from "../interface";
import connection from "../database/connection";
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
  }, connection);

  const tokenCreated = token.encode(userCreated);

  return tokenCreated;
}

const getAll = async () => userModel.getAll(connection);

const getById = async (id: number) => userModel.getById(id, connection);

const update = async (id: number, { creditCard, userDocument, value }: IUserUpdate) => {
  if (creditCard) { 
    const creditCardEncoded = await  bcrypt.hash(creditCard, 5);
    return userModel.update(+id, { creditCard: creditCardEncoded }, connection);
  };
  
  if (userDocument) {
    const userDocumentEncoded = await bcrypt.hash(userDocument, 5);
    return userModel.update(+id, { userDocument: userDocumentEncoded }, connection);
  };

  return userModel.update(+id, { value }, connection);
}

const deleteUser = async (id: number) =>  userModel.deleteUser(id, connection);

export default {
  create,
  getAll,
  getById,
  update,
  deleteUser,
}