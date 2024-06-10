const dotenv = require('dotenv');
dotenv.config({path : '.env'});

module.exports = {
    serverPort : process.env.PORT,
    dbName : process.env.DB_NAME,
    dbUser : process.env.DB_USER,
    dbPass : process.env.DB_USER_PASSWORD,
    dbHost : process.env.DB_HOST,
    authSecret : process.env.AUTH_SECRET,
    mailHost : process.env.EMAIL_HOST,
    mailHostPort : process.env.EMAIL_HOST_PORT,
    secureMail : process.env.SECURE_MAIL,
    mailUser : process.env.EMAIL_USER,
    mailToken : process.env.EMAIL_APP_TOKEN,
}