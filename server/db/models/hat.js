const Sequelize = require('sequelize')
const db = require('../db')

/*
product fields:
name
color
type
sku
price
manufacturer
imageUrl
description

//multiple images

*/
const Hat = db.define('hat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  sku: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '' //some image placeholder
  },
  description: {
    type: Sequelize.TEXT
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Hat
