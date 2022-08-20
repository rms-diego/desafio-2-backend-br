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

export default {
  create,
}