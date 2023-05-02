
// Este es el archivo dónde se crean las conexiones a la base de datos que vayamos a 
// utilizar. 

import {config as dotenv} from 'dotenv';
dotenv();

export const configDatabase = {

    host : 'localhost', 
    user :  'root',
    password : '',
    database :  'dbbreak',

};
