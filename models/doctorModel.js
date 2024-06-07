const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');
const doctorSpacialize = require('./doctorSpecializationModel');

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
    }
});

doctor.hasOne(doctorSpacialize, {foreignKey : "specialId"});

module.exports = doctor;