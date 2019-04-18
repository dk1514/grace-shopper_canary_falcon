const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    isCart: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    isSubmitted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Order
