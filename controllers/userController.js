const bcrypt = require('bcrypt');
const User = require('../models/userModel');

module.exports.getUsers = async (req,res)=>{
    const users = await User.findAll();
    const current = req.user;

    res.render('admin/users', {users, current});
}

module.exports.removeUser = async (req,res)=>{
    await User.destroy({where : {id : req.params.id}});
    res.redirect('/admin/users');
}

module.exports.editUser = async (req,res)=>{
    const user = await User.findOne({where : {id : req.params.id}});
    res.render('admin/actions/userForm');
}

module.exports.upadateUser = async (req,res)=>{
    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, async (err, hash)=>{
        if(err){
            console.log("unable to update");
        }
        else{
            const updatedData = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                contact : req.body.contact,
                address : req.body.address,
                password : hash
            };
            await User.update(updatedData, {where : {id : req.params.id}});
        }
    })
    console.log(req.body);
    res.redirect('/admin/users');
}

module.exports.addUser = (req,res)=>{
    res.render('admin/actions/userAddForm');
}

module.exports.createUser = async (req,res)=>{
    const saltRounds = 10;

    bcrypt.hash(req.body.password,saltRounds, async (err,hash)=>{
        if (err){
            console.log("unable to create user")
        }
        else{
            const user = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                contact : req.body.contact,
                address : req.body.address,
                password : hash
            }
            await User.create(user);
        }
        res.redirect('/admin/users');
    })
}