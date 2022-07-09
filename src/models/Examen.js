const { Schema, model } = require('mongoose');

const Examen = new Schema({
    RUT:{
        type: String
    },
    NOMBRE_DE_ASIGNATURA:{
        type: String
    },
    SECCION:{
        type: String
    },
    FECHA_EXAMENES:{
        type: String
    },
    DOCENTE_QUE_TOMA_EXAMEN:{
        type: String
    },
    HORA_INICIO:{
        type: String
    },
    SALA:{
        type: String
    }
})

module.exports = model( 'Examenes', Examen );