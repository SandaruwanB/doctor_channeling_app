const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports.createDefaultUser = ()=>{
    const saltRounds = 10;
    const email = "admin@gmail.com";
    const password = "admin";

    bcrypt.hash(password,saltRounds, (err,hash)=>{
        if (err){
            console.log("unable to create user")
        }
        else{
            User.create({email : email, password : hash,  firstName : "admin", lastName : "admin"});
        }
    })
}
