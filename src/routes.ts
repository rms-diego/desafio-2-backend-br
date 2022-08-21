import { Router } from 'express';
import UserController from './controllers/UserController';
import validateTokenMiddleware from './middleware/validateTokenMiddleware';

const routes = Router();

routes.post('/user/createUser', UserController.create);

routes.get(
  '/user/getAll',
  validateTokenMiddleware,
  UserController.getAll,
);

routes.get(
  '/user/getById/:id',
  validateTokenMiddleware,
  UserController.getById,
);

routes.put(
  '/user/update/:id',
  validateTokenMiddleware,
  UserController.update,
)

export default routes;