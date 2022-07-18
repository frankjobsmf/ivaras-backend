const express = require("express");
// const cors = require('cors');
const bodyParser = require("body-parser");
const { dbConnection } = require("../config/db");

class Server {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // this.app(bodyParser.json());

    this.app.set("view engine", "ejs");
    this.port = process.env.PORT || 3001;
    this.userPath = "/api/users";
    this.examsPath = "/api/exams";
    this.imagenPath = "/api/imagen";

    //db
    this.connection();

    //configuraciones iniciales
    this.middlewares();
    this.routes();
  }

  async connection() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.json());
    // this.app.use(cors());
  }

  routes() {
    this.app.use(this.userPath, require("../routes/user"));
    this.app.use(this.examsPath, require("../routes/exams"));
    this.app.use(this.imagenPath, require("../routes/image"));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
