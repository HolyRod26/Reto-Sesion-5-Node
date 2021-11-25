const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: { type: DataTypes.STRING, allowNull: false},
    lastName: { type: DataTypes.STRING },
    imgProfile: { type: DataTypes.STRING},
    bio: { type: DataTypes.TEXT},
}, {
    sequelize,
    modelName: 'User',
})

// si en verdad se puede hacer esa extension para crear los autores

class Author extends User {}
Author.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    publications: [{ type: DataTypes.TEXT }],
})

(async () => {
    await UserModel.sync({force: true});
})

module.exports = {User, Author};
