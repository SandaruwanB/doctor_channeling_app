const channelings = require('../models/channelingModel');

module.exports.getAdminView = (req,res)=>{
    const channels = channelings.findAll();

    res.render('admin/channelings', {channels});
}