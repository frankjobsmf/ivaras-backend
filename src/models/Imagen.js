const {Schema, model} = require('mongoose');

//env
const appHost = process.env.APP_HOST || 'http://localhost';
const port = process.env.PORT || 8001;


const Imagen = new Schema({

    imgUrl: {
        type: String
    }

});


// Imagen.methods.setImgUrl = function setImgUrl(filename) {
//     this.imgUrl = `${appHost}:${port}/public/${filename}`;
// }

module.exports = model('Imagenes', Imagen);