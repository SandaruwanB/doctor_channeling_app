const jwt = require('jsonwebtoken');
const config = require('../config');


module.exports.cookieAuthCheck = (req,res, next) => {
    const token = req.cookies.session;
    try{
        const user = jwt.verify(token, config.authSecret);
        req.user = user;
        next();
    }
    catch (err){
        res.clearCookie("session");
        console.log("token not found");
        return res.render('login');
    }
}

module.exports.authNotRequired = (req,res,next)=>{
    const token = req.cookies.session;   
    try{
        const user = jwt.verify(token, config.authSecret);
        req.user = user;
        return res.render('admin/dashboard');
    }
    catch(err){
        console.log("token not found");
        next();
    }
}