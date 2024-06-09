const {channeling, patient, doctor, payment} = require('../models/channelingModel');

module.exports.getView = async (req,res)=>{
    const channelings = await channeling.findAll({where : {paymentState : true}, include : [{model : doctor}, {model : patient}]});
    const payments = await payment.findAll();

    res.render('admin/payments', {channelings, payments});
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

module.exports.removePayment = async (req,res)=>{
    await channeling.update({paymentId : null, paymentState : false}, {where : { id : req.params.channelingId}}).then(async ()=>{
        await payment.destroy({where : {id : req.params.paymentId}});
    });

    res.redirect('/admin/payments');
}