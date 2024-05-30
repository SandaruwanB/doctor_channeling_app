const Sequalize = require('sequelize');
const config = require('../config');

const sequalize = new Sequalize(
    config.dbName,
    config.dbUser,
    config.dbPass,
    {
        'host' : config.dbHost,
        'dialect' : 'mysql'
    }
);

module.exports.connection = sequalize.authenticate().then(()=>{
    console.log("authenticated");
}).catch(err=>{
    console.log(err);
});