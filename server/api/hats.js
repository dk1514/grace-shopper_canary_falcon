const router = require('express').Router()
const {Hat} = require('../db/models')
module.exports = router

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
