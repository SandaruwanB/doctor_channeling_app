const {channeling, patient, doctor, payment} = require('../models/channelingModel');

module.exports.getAdminView = async (req,res)=>{
    const channelings = await channeling.findAll({include : [{model : doctor}, {model : patient}]});

    res.render('admin/channelings', {channelings});
}

module.exports.removeChanneling = async (req, res)=>{
    await channeling.destroy({where : {id : req.params.id}});

    res.redirect('/admin/channelings');
}

module.exports.editChanneling = async (req,res)=>{
    res.render('admin/actions/channelingsForm');
}

module.exports.addChanneling = async (req,res)=>{
    res.render('admin/actions/channelingsAddForm');
}

module.exports.getView = async (req,res)=>{
    const doctors = await doctor.findAll();

    res.render('apoinment', {doctors});
}