/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Ordee = db.model('order')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/order/', () => {
    // const quantity = 5

    beforeEach(() => {
      return Order.create({
        quantity: 5
      })
    })

    it('GET /api/order', async () => {
      const res = await request(app)
        .get('/api/cart')
        .expect(200)
      console.log('res.body: ', res.body)
      expect(res.body).to.be.an('array')
      expect(res.body[0].quantity).to.be.equal(5)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
