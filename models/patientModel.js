const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');

const patient = sequalize.define('patient', {
    name : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    email : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    mobile : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    address : {
        type : Sequalizer.STRING,
        allowNull : true
    },
    age : {
        type : Sequalizer.INTEGER,
        allowNull : false
    },
    gender : {
        type : Sequalizer.CHAR,
        allowNull : false
    }
});

module.exports = patient;