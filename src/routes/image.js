const {Router} = require('express');
const { subirImagen, obtenerImagenes } = require('../controllers/ImageController');
const multer = require('multer')



const ImagenRouter = Router();
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
  });
 
const upload = multer({  storage: storage}).single('img')


ImagenRouter.post('/upload', upload,subirImagen);
ImagenRouter.get('/', obtenerImagenes);


module.exports = ImagenRouter;