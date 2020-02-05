import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CidadeController from './app/controllers/CidadeController';
import ClienteController from './app/controllers/ClienteController';
import ColaboradorController from './app/controllers/ColaboradorController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // Tudo que vem depois passa pelo authMiddleware

routes.get('/users', UserController.index);

routes.post('/cidades', CidadeController.store);
routes.get('/cidades', CidadeController.index);

routes.post('/clientes', ClienteController.store);

routes.post('/colaboradores', ColaboradorController.store);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
