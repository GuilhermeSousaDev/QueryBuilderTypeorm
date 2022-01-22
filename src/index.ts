import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import './typeorm/connection';
import router from "./routes";

class App {
    app: express.Application;
    port = 8081

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.listen();
    }

    public middlewares() {
        this.app.use(cors())
    }

    public routes() {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
        this.app.use(router);
    }
    
    public listen() {
        this.app.listen(this.port, () => console.log('Iniciado ♦'))
    }
}
new App();