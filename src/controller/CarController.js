const Car = require('../models/CarModel')

class CarController {

    async postCar (req, res) {
        try {
            const saveCar = new Car(req.body)
            await saveCar.save()
            return res.status(200).json({ saveCar })

        }
        catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: 'Error create Car'})
        }

    }

    async listCar(req, res) {
        try {
            const listCar = await Car.find()
            return res.status(200).json({ listCar })

        }
        catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: 'Error List Car'})
        }
    }

    async listCarOne(req, res) {
        try {
            const listCarOne = await Car.findById(req.params.id)
            .then(doc => {
                if(!doc) { return res.status(400).json.end() }
                return res.status(200).json(doc)
            })
           return listCarOne

        }
        catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: 'Error ListOne Car'})
        }
    }

    async updateCar(req, res) {
        try {
            const carUpdate = await Car.findById(req.params.id)
            const model = carUpdate
                model.name = req.body.name,
                model.price = req.body.price
            model.save()
            return res.status(200).send({ model, message: 'Sucess' })    
        }
        catch(error) {
            console.log(error.message)
            return res.status(400).send({ message: 'Error update Car'})
        }
     }

     async deleteCar(req, res) {
         try{
             const carDelete = await Car.findOneAndDelete(req.params.id)
             return res.status(200).send({ carDelete })
         }
         catch(error) {
            console.log(error.message)
            return res.status(400).send({ message: 'Error delete Car'})
        }
     }
}

module.exports = new CarController()