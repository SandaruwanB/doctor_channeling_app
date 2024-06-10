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
    const newDoctor = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        contact : req.body.contact,
        address : req.body.address,
        workingHoursPerDay : req.body.workingHoursPerDay,
        averageTimePerPatient : req.body.averageTimePerPatient,
        specializedIn : req.body.specializedIn,
        availableDates : req.body.availableDates,
        workingTime : {
            sundayTime : req.body.sundayTime,
            mondayTime : req.body.mondayTime,
            tuesdayTime : req.body.tuesdayTime,
            wednsdayTime : req.body.wednsdayTime,
            thursdayTime : req.body.thursdayTime,
            fridayTime : req.body.fridayTime,
            saturdayTime : req.body.saturdayTime
        }
    }

    await doctor.create(newDoctor);

    res.redirect('/admin/doctors');
}

module.exports.updateDoctor = async (req,res)=>{
    const newDoctor = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        contact : req.body.contact,
        address : req.body.address,
        workingHoursPerDay : req.body.workingHoursPerDay,
        averageTimePerPatient : req.body.averageTimePerPatient,
        specializedIn : req.body.specializedIn,
        availableDates : req.body.availableDates,
        workingTime : {
            sundayTime : req.body.sundayTime,
            mondayTime : req.body.mondayTime,
            tuesdayTime : req.body.tuesdayTime,
            wednsdayTime : req.body.wednsdayTime,
            thursdayTime : req.body.thursdayTime,
            fridayTime : req.body.fridayTime,
            saturdayTime : req.body.saturdayTime
        }
    }

    await doctor.update(newDoctor, {where : {id : req.params.id}});

    res.redirect('/admin/doctors');
}