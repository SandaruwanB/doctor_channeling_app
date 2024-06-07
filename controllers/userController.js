const User = require('../models/userModel');

module.exports.getUsers = async (req,res)=>{
    const users = await User.findAll();
    const current = req.user;

    res.render('admin/users', {users, current});
}