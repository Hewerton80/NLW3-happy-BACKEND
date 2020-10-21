import  orphanageRoutes from './modules/orphanage/orphanage.controller'
import { Router } from 'express';

const routes = Router();

routes.use(orphanageRoutes)

export default routes;