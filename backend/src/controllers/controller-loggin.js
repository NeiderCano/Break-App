

// Aquí crearemos las variables de conexión con los parámetros "req" y "res".
// Las cuales exportaremos para recibirlas en "routes.js"  

import {connect} from '../database';

// import 'mysql2/promise';

export const conection = connect()

export const initinitapp = async (req, res) =>{
    res.send("Pantalla de carga");
};

export const getBreakHome = async (req, res) =>{
    const db = await connect();
    const [rows] = await db.query('SELECT * FROM ejercicios');   
    res.json(rows);
};

export const getExerciseId = async (req, res) =>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM ejercicios WHERE id_ejercicios = ?',[
    req.params.id
    ]);
    res.json(rows[0]);
    // console.log(rows[0]);
};

export const getExerciseCount = async (req, res) =>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM ejercicios'); 
    res.json(rows[0]['COUNT(*)']);

};

export const createNewExercise = async (req, res) =>{
    const connection = await connect();
    const [newExercise] = await connection.query('INSERT INTO ejercicios(nombre_ejercicio, dificultad_ejercicio, repeticiones_ejercicio, grupo_muscular, equipo_entrenamiento, url, posicion_inicial, descripcion_ejercicio) VALUES (?,?,?,?,?,?,?,?)',[
        req.body.nombre_ejercicio,
        req.body.dificultad_ejercicio,
        req.body.repeticiones_ejercicio,
        req.body.grupo_muscular,
        req.body.equipo_entrenamiento,
        req.body.url,
        req.body.posicion_inicial,
        req.body.descripcion_ejercicio
    ]
    );
    console.log([newExercise]);
    res.json({
        id : newExercise.insertId,
        ...req.body,
    });

};

export const deleteExercise = async (req, res) =>{
    const connection = await connect();
    await connection.query('DELETE FROM ejercicios WHERE id_ejercicios = ?',[
        req.params.id,
    ]);
    console.log("\ntarea {"+req.params.id+"} ha sido eliminada\n")
    res.sendStatus(204);

};

export const UpdateExercise = async (req, res) =>{
    const connection = await connect();
    await connection.query('UPDATE ejercicios SET ? WHERE id_ejercicios = ?', [
        req.body,
        req.params.id,
    ]);
    console.log("\nEjercicio {"+req.params.id+"} ha sido actualizado\n");
    res.sendStatus(204);
};

// INSERT INTO ejercicios(id_ejercicios, nombre_ejercicio, dificultad_ejercicio, repeticiones_ejercicio, grupo_muscular, equipo_entrenamiento, url, posicion_inicial, descripcion_ejercicio) VALUES (400, "prueba","prueba","prueba","prueba","prueba","prueba","prueba","prueba")