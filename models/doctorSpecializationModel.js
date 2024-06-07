const Sequalize = require('sequelize');
const {sequalize} = require('../database/sequalize');

const doctorSpecialize = sequalize.define('doctorSpacialize', {
    name : {
        type : Sequalize.STRING,
        allowNull : false
    }
});

module.exports = doctorSpecialize;
