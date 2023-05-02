"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = require("../database");

var _controllerLoggin = require("../controllers/controller-loggin");

var router = (0, _express.Router)();
/**  
 * @swagger
 * tags: 
 * name: EXERCISES
 * description: Endpoints
*/

/**  
 * @swagger
 * /:   
 *  get: 
 *   summary: Presenta la interfaz de inicio de carga 
 *   tags: [EXERCISES]
 * 
*/

router.get('/', _controllerLoggin.initinitapp);
/**  
 * @swagger
 * /break:   
 *  get: 
 *   summary: Muestra el 'Home' y lista los ejercicios de la app
 *   tags: [EXERCISES]
*/

router.get('/break', _controllerLoggin.getBreakHome);
/**  
 * @swagger
 * /break/count:    
 *  get: 
 *   summary: Cuenta los ejercicios totales de la BD
 *   tags: [EXERCISES]
*/

router.get('/break/count', _controllerLoggin.getExerciseCount);
/**  
 * @swagger
 * /break:   
 *  get: 
 *   summary: Obtiene una tarea por su ID
 *   tags: [EXERCISES]
*/

router.get('/break/:id', _controllerLoggin.getExerciseId);
/**  
 * @swagger
 * /break:   
 *  post: 
 *   summary: permite crear nuevos ejercicios
 *   tags: [EXERCISES]
*/

router.post('/break', _controllerLoggin.createNewExercise);
/**  
 * @swagger
 * /break:   
 *  delete: 
 *   summary: permite eliminar ejercicios por su ID
 *   tags: [EXERCISES]
*/

router["delete"]('/break/:id', _controllerLoggin.deleteExercise);
/**  
 * @swagger
 * /break:   
 *  put: 
 *   summary: Permite actualizar ejercicios por su ID
 *   tags: [EXERCISES]
*/

router.put('/break/:id', _controllerLoggin.UpdateExercise);
var _default = router;
exports["default"] = _default;