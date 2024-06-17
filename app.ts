import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'

class App {
    public express: express.Application

    constructor() {
        this.express =  express()
        this.middleware()
        this.database()
        this.routes()

    }

    private middleware() : void {
        this.express.use(express.json())
    }

    private async database() {
        try {
            await mongoose.connect('mongodb://0.0.0.0:2701/Gerenciador-tarefas');
            console.log('database connect');
        } catch(err) {
            console.log('Error database connect');

        }
    }

    private routes() : void {
        this.express.use(routes)
    }
 
}

export default new App().express