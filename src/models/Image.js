const {model, Schema}  = require('mongoose')



const ImagenSchema = new Schema({
    nombre:{
        type: String
    },
    active:{
        type: Boolean
    },
    img:{
        data: Buffer,
        contentType: String
    }
})



module.exports = new model('Image', ImagenSchema);