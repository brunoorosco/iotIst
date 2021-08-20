const { Sequelize } = require('sequelize')
const path = require('path')

const __dirname = path.resolve()

//console.log(path.join('db',"database.sqlite"))

const sequelize = new Sequelize({
    storage: path.resolve('db','config',"database.sqlite"), // or -> path.join(process.cwd(), "database.sqlite")
    dialect: 'sqlite',
})

module.exports =  sequelize