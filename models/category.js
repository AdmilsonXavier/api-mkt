const Sequelize = require('sequelize')
const database = require('../db/db')

const Category = database.define('category', {
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

module.exports = Category;