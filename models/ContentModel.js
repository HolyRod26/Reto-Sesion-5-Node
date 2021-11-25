const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Content extends Model {}
Content.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    heading: { type: DataTypes.TEXT },
    content: { type: DataTypes.TEXT },
    author: {type: DataTypes.STRING}, // Aqui es mi duda, como conectar el autor y sus publicaciones que tiene
    // Usando el modelo que hice en UserModel.js
}, {
    sequelize,
    modelName: 'Content',
})

(async () => {
    await UserModel.sync({force: true});
})

module.exports = Content;