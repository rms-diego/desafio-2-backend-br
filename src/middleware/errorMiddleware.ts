import { NextFunction, Request, Response } from "express";

export default (error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.status(500).json({ message: error.message });
}