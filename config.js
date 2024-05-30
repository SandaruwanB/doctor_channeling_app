const dotenv = require('dotenv');
dotenv.config({path : '.env'});

module.exports = {
    serverPort : process.env.PORT,
    dbName : process.env.DB_NAME,
}