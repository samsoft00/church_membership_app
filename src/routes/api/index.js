import { Router } from 'express';
import welcomeRoute from './welcome.route';
import userRoute from './user.route';

const routes = Router();

routes.use('/', welcomeRoute);
routes.use('/', userRoute);

export default routes;
