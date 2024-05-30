const Sequalize = require('sequelize');
const config = require('../config');

module.exports.sequalize = new Sequalize(
    config.dbName,
    config.dbUser,
    config.dbPass,
    {
        'host' : config.dbHost,
        'dialect' : 'mysql'
    }
);
