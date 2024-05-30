const dotenv = require('dotenv');
dotenv.config({path : '.env'});

module.exports = {
    serverPort : process.env.PORT,
    dbName : process.env.DB_NAME,
    dbUser : process.env.DB_USER,
    dbPass : process.env.DB_USER_PASSWORD,
    dbHost : process.env.DB_HOST
}