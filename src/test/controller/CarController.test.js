const request = require('supertest')
const app = require('../../app')

describe('Router CRUD Application CarController', () => {

    // Testar cenario que retorna status code 200
    it('should post application', async () => {
        const response = await request(app).post('/car')
        .send({ name: "Onix", price: 42000 })

        expect(response.status).toBe(200);
        expect(response.body.saveCar.name).toBe("Onix");
    })

    // Cenario se Passar rota Inexistente
    it('should post application not found', async () => {
        const response = await request(app).post('/bike')
        
        expect(response.status).toBe(404);
    })

    // Cenario se retornar nosso get
    it('should get Application', async () => {
        const response = await request(app).get('/car')

        expect(response.body.listCar[0].price).toEqual(30000)
        expect(response.status).toBe(200)
        
    })

    // Cenario se retornar nosso get not found
    it('should get Application not found', async () => {
        const response = await request(app).get('/bike')
        expect(response.status).toBe(404)
    })

    // Cenario se retornar um getone Sucess
    it('should getOne Application', async () => {
        const id = '61394a12f11b3dd03645602c'
        const response = await request(app).get(`/car/${id}`);

        expect(response.status).toEqual(200);
    })

    // Cenario se retornar um getone Fail
    it('should getOne Application not found', async () => {
        const id = '1'
        const response = await request(app).get(`/car/${id}`);

        expect(response.status).toEqual(400);
    })

    // Cenario delete Sucess
    it('should delete Application', async () => {
        const id = '613952ff7bd7688f1c816f9e'
        const response = await request(app).delete(`/car/${id}`)

        expect(response.status).toEqual(200);
    })

    // Cenario delete Fail
    it('should delete Application', async () => {
        const id = '2'
        const response = await request(app).delete(`/car/${id}`)

        expect(response.status).toEqual(200);
    })

    // Cenario se passar o ID Correto.
  it('should update application', async () => {
    const id = '61394d585c7435908f2f240c'
    const response = await request(app).put(`/car/${id}`)
    .send({ name: "Car Test", price: 22 })

    expect(response.body.model.price).toEqual(22);
    expect(response.status).toEqual(200);
  })

  // Cenario se passar o ID Errado.
  it('There is no ID for this change', async () => {
    const id = '5'
    const response = await request(app).put(`/car/${id}`)
    .send({ name: "Car", price: 22 })

    expect(response.status).toEqual(400);
  })
})
