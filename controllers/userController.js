const User = require('../models/userModel');

module.exports.getUsers = async (req,res)=>{
    const users = await User.findAll();
    const current = req.user;

    res.render('admin/users', {users, current});
}

module.exports.removeUser = async (req,res)=>{
    res.redirect('/admin/users');
}

module.exports.editUser = (req,res)=>{
    const view = "edit";

    res.render('admin/actions/userForm', {view});
}