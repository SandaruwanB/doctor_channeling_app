const patients = require('../models/patientModel');

module.exports.getPatients = async (req,res)=>{
    const patientDetails = await patients.findAll();

    res.render('admin/patients', {patientDetails});
}

module.exports.editPatients = async (req,res)=>{
    res.render('admin/actions/patientsForm');
}

module.exports.removePatient = async (req,res)=>{
    res.redirect('/admin/patients');
}