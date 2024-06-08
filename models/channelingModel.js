const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');
const doctor = require('./doctorModel');
const patient = require('./patientModel');
const payment = require('./paymentsModel');

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
    },
    paymentState : {
        type : Sequalizer.BOOLEAN,
        allowNull : false
    }
});

doctor.hasMany(channeling, { foreignKey : 'doctorId' });
patient.hasMany(channeling, { foreignKey : 'patientId' });
payment.hasOne(channeling, {foreignKey : "paymentId"});

channeling.belongsTo(doctor, {foreignKey : 'doctorId', targetKey : 'id'});
channeling.belongsTo(patient, {foreignKey : 'patientId', targetKey : 'id'});
payment.belongsTo(channeling, {foreignKey : 'paymentId', targetKey : 'id'});

module.exports = {channeling, doctor, patient, payment};