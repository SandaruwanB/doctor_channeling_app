const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.index = (req,res)=>{
    res.render('login');
}

module.exports.performLogin = (req,res)=>{
    const {email, password} = req.body;

    User.findOne({where : {email : email}}).then(user=>{
        if(user === null){
            res.json({result : "not"});
        }
        else{
            bcrypt.compare(password,user.password).then(result=>{
                if(result){
                    const token = jwt.sign(user.email, config.authSecret);
                    res.cookie("session", token);
                    res.json({result : "authenticated"});
                }
                else{
                    res.send({result : "pass"});
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    }).catch(err=>{
        console.log(err);
    })
} 


module.exports.logout = (req,res)=>{
    
}