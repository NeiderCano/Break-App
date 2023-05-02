import { Router } from "express";
import {connect} from "../database";
import {
    initinitapp, 
    getBreakHome, 
    getExerciseId, 
    getExerciseCount, 
    deleteExercise, 
    createNewExercise,
    UpdateExercise,
} from '../controllers/controller-loggin';


const router = Router();

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
router.get('/break', initinitapp);

/**  
 * @swagger
 * /break:   
 *  get: 
 *   summary: Muestra el 'Home' y lista los ejercicios de la app
 *   tags: [EXERCISES]
*/
router.get('/break/home', getBreakHome);

/**  
 * @swagger
 * /break/count:    
 *  get: 
 *   summary: Cuenta los ejercicios totales de la BD
 *   tags: [EXERCISES]
*/
router.get('/break/count', getExerciseCount);

/**  
 * @swagger
 * /break:   
 *  get: 
 *   summary: Obtiene una tarea por su ID
 *   tags: [EXERCISES]
*/
router.get('/break/:id', getExerciseId);

/**  
 * @swagger
 * /break:   
 *  post: 
 *   summary: permite crear nuevos ejercicios
 *   tags: [EXERCISES]
*/
router.post('/break', createNewExercise);

/**  
 * @swagger
 * /break:   
 *  delete: 
 *   summary: permite eliminar ejercicios por su ID
 *   tags: [EXERCISES]
*/
router.delete('/break/:id', deleteExercise);

/**  
 * @swagger
 * /break:   
 *  put: 
 *   summary: Permite actualizar ejercicios por su ID
 *   tags: [EXERCISES]
*/
router.put('/break/:id', UpdateExercise);
 
export default router;