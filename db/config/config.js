
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize({
//     development: {
//         storage: '../db/database.sqlite',
//         dialect: 'sqlite',
//     },
//     test: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         dialect: 'mysql',
//         logging: false,
//     },
//     production: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: true,
//         },
//     },
// });

// module.exports = sequelize;

Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../db/database.sqlite'
  })
 
module.exports = sequelize;
