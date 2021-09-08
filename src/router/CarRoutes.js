const { Router } = require('express')
const CarController = require('../controller/CarController')
const app = Router()

app.post('/car', CarController.postCar)
app.get('/car', CarController.listCar)
app.get('/car/:id', CarController.listCarOne)
app.put('/car/:id', CarController.updateCar)
app.delete('/car/:id', CarController.deleteCar)

module.exports = app;