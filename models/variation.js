const Sequelize = require('sequelize')
const database = require('../db/db')

const Variation = database.define('variation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    description: Sequelize.STRING
})

module.exports = Variation;