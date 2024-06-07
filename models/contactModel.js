const Sequalizer = require('sequelize');
const {sequalize} = require('../database/sequalize');


const contact = sequalize.define('contact', {
    name : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    email : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    contact : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    subject : {
        type : Sequalizer.STRING,
        allowNull : false
    },
    message : {
        type : Sequalizer.TEXT,
        allowNull : false
    },
    status : {
        type : Sequalizer.STRING,
        allowNull : false,
        default : "Not replied"
    }
});


module.exports = contact;

