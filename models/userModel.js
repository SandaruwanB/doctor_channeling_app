const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');


const User = sequalize.define('user', {
    firstName : {
        type : Sequalizer.STRING,
        allowNull : false,
    },
    lastName : {
        type : Sequalizer.STRING,
        allowNull : false,
    },
    email : {
        type : Sequalizer.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequalizer.STRING,
        allowNull : false,
    }
});

module.exports = User;