const router = require('express').Router()
const {Hat} = require('../db/models')
module.exports = router
const {User} = require('../db/models/user')

router.get('/', async (req, res, next) => {
  try {
    const hats = await Hat.findAll()
    res.json(hats)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleHat = await Hat.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(singleHat)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const selectedHat = await Hat.findByPk(req.params.id)
    //only want to update quant
    const updatedSelectedHat = await selectedHat.update(req.body)
    res.json(updatedSelectedHat)
  } catch (error) {
    next(error)
  }
})
