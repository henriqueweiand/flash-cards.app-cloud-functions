import { Router } from 'express';
import { DefaultController } from '../modules/default/Default.controller';

const defaultRoutes = Router();
const defaultController = new DefaultController();

defaultRoutes.get('/', defaultController.ok);

export { defaultRoutes };
