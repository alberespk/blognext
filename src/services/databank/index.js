const { Sequelize } = require('sequelize');

const path = require('path');
const fs = require('fs');

const databank = {};

const sequelize = new Sequelize({
    database: process.env.DATABANK_DATABASE,
    username: process.env.DATABANK_USER,
    password: process.env.DATABANK_PASS,
    port: process.env.DATABANK_PORT,
    host: process.env.DATABANK_HOST,
    dialect: process.env.DATABANK_DIALECT
});

fs.readdirSync(path.join(process.cwd(), 'src', 'services', 'databank', 'models'))
    .forEach(filename => {
        require(`.${path.sep}models${path.sep}${filename}`)(sequelize, Sequelize.DataTypes); 
    });

databank.Sequelize = Sequelize;
databank.sequelize = sequelize;

databank.models = sequelize.models;

module.exports = databank;