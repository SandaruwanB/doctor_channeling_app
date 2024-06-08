const {channeling, patient, doctor} = require('../models/channelingModel');


module.exports.getView = (req,res)=>{
    res.render('admin/payments');
}

module.exports.newPayment = async (req,res)=>{
    const channels = await channeling.findAll({where : {paymentState : false},include : [{model : doctor}, {model : patient}]});

    console.log(channels);
    res.render('admin/actions/paymentsForm', {channels});
}