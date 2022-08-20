import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";
import userService from "../service/userService";

const create = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { userDocument, creditCard, value } = request.body;
    
    const token = await userService.create({ userDocument, creditCard, value });
    
    return response.status(201).json({ message: 'User created', token });
  } catch (error) {
    next(error);
  }
}

const getAll = async (_request: Request, response: Response, next: NextFunction) => {
  try {
    const allUsers = await userModel.getAll();

    return response.status(200).json(allUsers);
  } catch (error) {
    next();
  }
}

const getById = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    
    const userFinded = await userModel.getById(+id);

    return response.status(200).json(userFinded);
  } catch (error) {
    next();
  }
}

export default {
  create,
  getAll,
  getById,
}