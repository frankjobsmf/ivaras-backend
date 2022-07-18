const {request, response} = require('express');
const Image = require('../models/image');
// const multer = require('multer');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");



const subirImagen = async(req=request, res=response) => {
    const image = new Image;
    image.nombre = req.body.nombre;
    image.active = req.body.active;
    image.img = { data: req.file.filename,  contentType: 'image/png'}
    
    try {  
       await image.save();
      return res.json('Good')
               
    } catch (error) {
        res.json(error);
    }
}


const obtenerImagenes = async(req, resp)=>{
    const image = await Image.find({});

    try {
    resp.json(image)
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    subirImagen,
    obtenerImagenes
}