const Sequelize = require('sequelize');
const database = require('../config/database');
 
const Produto = database.define('maquinas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    maqName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modMaq: {
        type: Sequelize.STRING,
        allowNull: false
    },
    macMAq: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ipMaq: {
        type: Sequelize.STRING
    },
    status: Sequelize.BOOLEAN
})
 
module.exports = Produto;