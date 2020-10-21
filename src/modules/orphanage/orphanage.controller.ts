import {  OphanageService } from './orphanage.service'
import { Router } from 'express';
import multer from 'multer';
import {multerService} from '../../global-service/multer.service'
const routes = Router();
const upload = multer(multerService);
const { 
    createOrphanage ,
    findAllOrphanages,
    finOneOrphanageById
} = new OphanageService();

routes.post('/orphanage', upload.array('images'), createOrphanage);
routes.get('/orphanage', findAllOrphanages);
routes.get('/orphanage/:id', finOneOrphanageById);
export default routes;
