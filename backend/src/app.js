
// Archivo principal de la app


import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { options } from './swagger-options';

import express from "express";
import cors from 'cors';
import morgan from 'morgan';

const specs = swaggerJSDoc(options);

import BreakRoutes from './routes/routes';



const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(BreakRoutes);


app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));


export default app;