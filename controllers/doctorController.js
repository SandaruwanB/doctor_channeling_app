const doctor = require('../models/doctorModel');

module.exports.getAdminView = async (req,res)=>{
    const doctors = await doctor.findAll();

    console.log(doctors);
    res.render('admin/doctors', {doctors});
}


module.exports.removeDoctor = async (req,res)=>{
    await doctor.destroy({where : {id : req.params.id}});
    res.redirect('/admin/doctors');
}


module.exports.editDoctor = async (req,res)=>{
    res.render('admin/actions/doctorForm');
}