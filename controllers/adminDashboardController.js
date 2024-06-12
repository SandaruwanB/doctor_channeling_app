const {channeling, patient, doctor, payment} = require('../models/channelingModel');

module.exports.getView = async (req,res)=>{
    const limit = 3;
    let totalPayment = 0;
    const channels = await channeling.findAll();
    const doctors = await doctor.findAll();
    const payments = await payment.findAll();
    const patients = await patient.findAll();

    payments.map((value)=>{
        totalPayment += value.amount;
    });

    const filterdData = await channeling.findAll({
        include : [{model : doctor}, {model : patient}],
        order : [['createdAt', 'DESC']],
        limit
    });

    res.render('admin/dashboard', {channels, doctors, payments, patients, totalPayment, filterdData});
}