const {request, response} = require('express');
const multer  = require('multer');
const multerConfig = require('../utils/multerConfig');
const Imagen = require('../models/Imagen');


const upload = multer(multerConfig).single('imgUrl')
const imagen = Imagen();


const fileUpload = (req, res, next) => {

    upload(req, res, function(error){
        if(error){
            res.json({msg: error});
        }
        return next();
    });

};


const addImage = async(req = request, res = response) => {

    const imagen = new Imagen();

    try {

        if(req.file && req.file.filename){
            imagen.imgUrl = req.file.filename;
        }
    
        await imagen.save();
        return res.json({msg: 'Image saved successfully'});
    } catch(err){

        return res.status(500).json({msg: err.message});

    }



}


module.exports = {
    fileUpload,
    addImage,
}