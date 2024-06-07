const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');

const doctor = sequalize.define("doctor", {
    firstName : {
        type : Sequalizer.STRING,
        allowNull : false,
    },
    lastName : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    address : {
        type : Sequalizer.STRING,
        allowNull : true
    },
    email : {
        type : Sequalizer.STRING,
        allowNull : true
    },
    contact : {
        type : Sequalizer.STRING,
        allowNull : true
    },
    workingHoursPerDay : {
        type : Sequalizer.INTEGER,
        allowNull : false
    },
    averageTimePerPatient : {
        type : Sequalizer.FLOAT,
        allowNull : false
    },
    specializedIn : {
        type : Sequalizer.STRING,
        allowNull : false
    }
});

module.exports = doctor;