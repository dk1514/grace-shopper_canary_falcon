const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    products: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    total: {
        type: Sequelize.DECIMAL
    }
})

module.exports = Cart
