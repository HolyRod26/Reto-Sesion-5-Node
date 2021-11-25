const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mariadb', 
    logging: false
});

module.exports = sequelize;
