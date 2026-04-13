import { Router } from 'express';

import { sessionsRoutes } from './sessions.routes';
import { productsRoutes } from './products.routes';

import { ensureAuthenticated } from '../../middlewares/ensureAuthorization';

const routes = Router();
routes.use('/sessions', sessionsRoutes);
routes.use('/products', ensureAuthenticated, productsRoutes);

export { routes };
