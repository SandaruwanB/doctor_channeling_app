const User = require('../models/userModel')
const bcrypt = require('bcrypt');

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