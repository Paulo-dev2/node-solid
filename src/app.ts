import express from 'express';
import cors from 'cors';
import { router } from './routes';

class App{
    public server;
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    public middleware() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    private routes() {
        this.server.use(router);
    }
}
export default new App().server;