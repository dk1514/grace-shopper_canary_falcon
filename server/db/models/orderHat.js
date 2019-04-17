const Sequelize = require('sequelize')
const db = require('../db')

const OrderHat = db.define('order_hat', {
    price: {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

module.exports = OrderHat
