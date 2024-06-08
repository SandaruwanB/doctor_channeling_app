const doctor = require('../models/doctorModel');

module.exports.getAdminView = async (req,res)=>{
    const doctors = await doctor.findAll();
    
    res.render('admin/doctors', {doctors});
}

module.exports.removeDoctor = async (req,res)=>{
    await doctor.destroy({where : {id : req.params.id}});
    res.redirect('/admin/doctors');
}

module.exports.editDoctor = async (req,res)=>{
    const doctordetails = await doctor.findOne({where : {id : req.params.id}});

    res.render('admin/actions/doctorForm', {doctordetails});
}

module.exports.addDoctor = async (req,res)=>{
    res.render('admin/actions/doctorAddForm');
}

module.exports.saveDoctor = async (req,res)=>{
    await doctor.create(req.body);
    
    res.redirect('/admin/doctors');
}

module.exports.updateDoctor = async (req,res)=>{
    await doctor.update(req.body, {where : {id : req.params.id}});

    res.redirect('/admin/doctors');
}