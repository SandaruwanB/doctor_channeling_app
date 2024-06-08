const {channeling, patient, doctor, payment} = require('../models/channelingModel');


module.exports.getView = (req,res)=>{
    res.render('admin/payments');
}

module.exports.newPayment = async (req,res)=>{
    const channels = await channeling.findAll({where : {paymentState : false}, include : [{model : doctor}, {model : patient}]});

    res.render('admin/actions/paymentsForm', {channels});
}

module.exports.createPayment = async (req,res)=>{
    await payment.create(req.body).then(async payment=>{
        await channeling.update({paymentState : true, paymentId : payment.id}, {where : {id : req.body.channelId}});
        res.redirect('/admin/payments');
    });     
}