const Sequelize = require('sequelize')
const database = require('../db/db')

const Brand = database.define('brand', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    description: Sequelize.STRING
})

module.exports = Brand;