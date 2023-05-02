"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configDatabase = void 0;

var _dotenv = require("dotenv");

// Este es el archivo dónde se crean las conexiones a la base de datos que vayamos a 
// utilizar. 
(0, _dotenv.config)();
var configDatabase = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
exports.configDatabase = configDatabase;