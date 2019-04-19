const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
    let test = req.session.test = 'hi'
    res.json(test)
})

router.post('/', (req, res, next) => {
    req.session.hi = req.body
})
