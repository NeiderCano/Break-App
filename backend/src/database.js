
// En este archivo importamos la base de datos con el nombre'configDatabase' y a partir de ella
// creamos la variable "connect" de conexión 

import mysql from 'mysql2/promise';
import {configDatabase} from './DBconfig';

export const connect = async() =>{
    return await mysql.createConnection(configDatabase);
};
