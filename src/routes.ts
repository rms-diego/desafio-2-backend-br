import { Router } from 'express';
import UserController from './controllers/UserController';
import validateTokenMiddleware from './middleware/validateTokenMiddleware';

const routes = Router();

routes.post('/user/createUser', UserController.create);

routes.get(
  '/user/getAll',
  validateTokenMiddleware,
  UserController.getAll
);

export default routes;