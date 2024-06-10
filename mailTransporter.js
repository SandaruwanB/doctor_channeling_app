const nodemailer = require('nodemailer');
const config = require('./config');


module.exports.transporter = nodemailer.createTransport({
    host : config.mailHost,
    port : config.mailHostPort,
    secure : config.secureMail,
    auth : {
        user : config.mailUser,
        pass : config.mailToken
    }
});