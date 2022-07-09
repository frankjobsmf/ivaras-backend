const express =  require('express');
const cors = require('cors');


const { dbConnection } =  require('../config/db');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 3001;
        this.userPath = '/api/users';
        this.examsPath = '/api/exams';

        //db
        this.connection();


        //configuraciones iniciales
        this.middlewares();
        this.routes();


    }

    
    async connection(){
        await dbConnection();
    }


    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }


    routes(){
        this.app.use(this.userPath, require('../routes/user'));
        this.app.use(this.examsPath, require('../routes/exams'));
    }

    listen(){
        
        this.app.listen(this.port);

    }
}

module.exports = Server;