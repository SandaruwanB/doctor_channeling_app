const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports.cookieAuthCheck = (req,res, next) => {
    //const token = "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AZ21haWwuY29t.8o4jwhpd1RSl68c9gwXIFiD5c0XaWteCDUb4TUUBJHc";
    console.log(token);
    try{
        const user = jwt.verify(token, config.authSecret);
        req.user = user;
        next();
    }
    catch (err){
        //res.clearCookie("session");
        console.log(err);
        return res.render('login');
    }
}

module.exports.authNotRequired = (req,res,next)=>{
    const token = "eyJhbGciOiJIUzI1NiJ9.YWRtaW5AZ21haWwuY29t.8o4jwhpd1RSl68c9gwXIFiD5c0XaWteCDUb4TUUBJHcsda";
    console.log(token);
    try{
        const user = jwt.verify(token, config.authSecret);
        req.user = user;
        return res.render('admin/dashboard');
    }
    catch(err){
        next();
    }
}