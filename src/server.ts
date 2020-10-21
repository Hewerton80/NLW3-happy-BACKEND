import 'dotenv/config';
import express from 'express';
import './database/connection';
import routes from './routes';
import 'express-async-errors';
import cors from 'cors';
import { join } from 'path';
import { errorHandler } from './global-service/errors-handler.service';

const app = express();

//middlewares globais
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(routes);

//static files
app.use('/files',express.static(join(__dirname,'..','uploads')))

//handler globals errors
app.use(errorHandler);

app.listen(process.env.PORT,()=>
    console.log(`Server listing on ${process.env.HOST}:${process.env.PORT}`)
)