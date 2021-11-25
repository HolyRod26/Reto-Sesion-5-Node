const { Sequelize } = require('sequelize');
const UserModel = require('./models/UserModel');
const ContentModel = require('./models/ContentModel');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mariadb', 
    logging: false
});

const models = [UserModel, ContentModel];

for (let model of models) {
    model(sequelize)
}

module.exports = sequelize;
