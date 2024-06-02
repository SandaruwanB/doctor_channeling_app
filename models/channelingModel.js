const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');
const doctor = require('./doctorModel');
const patient = require('./patientModel');

const channeling = sequalize.define('channeling', {
    time : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    apoinmentNumber : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    date : {
        type : Sequalizer.DATE,
        allowNull : false
    }
});

doctor.hasMany(channeling, { foreignKey : 'doctorId' });
patient.hasMany(channeling, { foreignKey : 'patientId' });

module.exports = channeling;