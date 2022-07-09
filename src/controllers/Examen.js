const {request, response} = require('express');
const Examen = require('../models/Examen');

const getExamenByUser = async(req=request, res=response) => {
    const { rut } = req.params;
    const examsByUser = await Examen.find({RUT: rut});
    res.status(200).json(examsByUser);

}

module.exports = {
    getExamenByUser,
}