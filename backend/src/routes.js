import { Router } from 'express';

import CidadeController from './app/controllers/CidadeController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/cidades', CidadeController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // Tudo que vem depois passa pelo authMiddleware

routes.put('/users', UserController.update);

export default routes;
