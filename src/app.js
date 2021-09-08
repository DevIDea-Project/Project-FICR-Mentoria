const express = require('express')
const router = require('./router/CarRoutes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
 
class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.database()
    }


    middlewares() {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: true }))
    }

    routes() {
        this.express.use(router)
    }

    database() {
        mongoose.connect('mongodb://localhost:27017/FICR', {
            keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true
        }, (error) => {
            if(error) {
                console.log(error)
            }
            else {
                console.log('DB UP!')
            }
        })
    }
}

module.exports = new App().express