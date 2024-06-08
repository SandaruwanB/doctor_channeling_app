const Sequalizer = require('sequelize');
const {sequalize} = require("../database/sequalize");

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

module.exports = payment;