const channeling = require('../models/channelingModel');

module.exports.getAdminView = (req,res)=>{

    res.render('admin/channelings');
}