const patients = require('../models/patientModel');

module.exports.getPatients = async (req,res)=>{
    const patientDetails = await patients.findAll();

    res.render('admin/patients', {patientDetails});
}

module.exports.editPatients = async (req,res)=>{
    const patient = await patients.findOne({where : {id : req.params.id}});

    res.render('admin/actions/patientsForm', {patient});
}

module.exports.removePatient = async (req,res)=>{
    await patients.destroy({where : {id : req.params.id}});
    res.redirect('/admin/patients');
}

module.exports.addPatient = async (req,res)=>{
    res.render('admin/actions/patientsAdd');
}

module.exports.createPatient = async (req,res)=>{
    try {
        await patients.create(req.body);
    } catch (error) {
        console.log(error);
    }
    res.redirect('/admin/patients');
}

module.exports.updateUser = async (req,res)=>{
    try {
        await patients.update(req.body, {where : { id : req.params.id }})
    } catch (error) {
        console.log(error);
    }

    res.redirect('/admin/patients');
}