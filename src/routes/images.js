const {Router} = require('express');
const {addImage, fileUpload} = require('../controllers/Imagen');

imagenRouter = Router();

imagenRouter.post('',
    fileUpload,
    addImage);

module.exports = imagenRouter;

