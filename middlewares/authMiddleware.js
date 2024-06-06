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
        return res.redirect('/login');
    }
}

module.exports.authNotRequired = (req,res,next)=>{
    const token = req.cookies.session;   
    try{
        const user = jwt.verify(token, config.authSecret);
        req.user = user;
        return res.redirect('/admin/dashboard');
    }
    catch(err){
        next();
    }
}