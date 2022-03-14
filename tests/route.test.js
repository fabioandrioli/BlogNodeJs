const request = require('supertest');
const app = require('../app');
const siteRouter = require('../routes/siteRouter')
// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe('Website homepage test',() => {
    it('Should get index route of site',async () => {
        const res = await request(app).get("/")
        expect(res.status).toEqual(200)
    })

    it('Should get login route of site',async () => {
        const res = await request(app).get("/login")
        expect(res.status).toEqual(200)
    })

    it('Should get register route of site',async () => {
        const res = await request(app).get("/register")
        expect(res.status).toEqual(200)
    })

    it('Should get show post route of site',async () => {
        const res = await request(app).get("/show/6")
        expect(res.status).toEqual(200)
    })

    // it('Should get index route called login',async () => {
    //     const res = await request(app).get("/login")
    // })

    // it('Should get index route called login',async () => {
    //     const res = await request(app)
    //                         .post("/register")
    //                         .send({
    //                             name:"Jest Test",
    //                             email:"Teste jest",
    //                             "password":"12345678",
    //                         })
    // })
});