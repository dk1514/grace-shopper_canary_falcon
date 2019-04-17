/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Hat = db.model('hat')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/hats/', () => {
    const hatName = 'greenhat'
    const price = 300
    const manufacturer = 'wassup'
    const quantity = 420

    beforeEach(() => {
      return Hat.create({
        name: hatName,
        price,
        manufacturer,
        quantity
      })
    })

    it('GET /api/hats', async () => {
      const res = await request(app)
        .get('/api/hats')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(hatName)
      expect(res.body[0].price).to.be.equal(price)
      expect(res.body[0].manufacturer).to.be.equal(manufacturer)
      expect(res.body[0].quantity).to.be.equal(quantity)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
