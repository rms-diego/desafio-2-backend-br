import { NextFunction, Request, Response } from "express";
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
    const allUsers = await userService.getAll();

    return response.status(200).json(allUsers);
  } catch (error) {
    next();
  }
}

const getById = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    
    const userFinded = await userService.getById(+id);

    return response.status(200).json(...userFinded);
  } catch (error) {
    next();
  }
}

const update = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    await userService.update(+id, request.body)

    return response.status(200).json({ message: 'user updated' });
  } catch (error) {
    next();
  }
}

const deleteUser = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    await userService.deleteUser(+id)

    return response.status(200).json({ message: 'user deleted' });
  } catch (error) {
    next();
  }
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteUser
}