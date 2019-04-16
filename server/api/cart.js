const router = require('express').Router()
const {Cart} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const {data} = await Cart.findAll()
        res.json(data)
    } catch(err) {next(err)}
})
