const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    items: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    total: {
        type: Sequelize.DECIMAL
    },
    orderSubmitted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

Order.getTotal = function() {
    // return 
}

module.exports = Order
