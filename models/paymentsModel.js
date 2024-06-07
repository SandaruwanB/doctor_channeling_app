const Sequalizer = require('sequelize');
const {sequalize} = require("../database/sequalize");
const channeling = require('./channelingModel');

const payment = sequalize.define('payment', {
    method : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    amount : {
        type : Sequalizer.FLOAT,
        allowNull : false
    },    
});

channeling.hasOne(payment, {foreignKey : "channelId"});

module.exports = payment;