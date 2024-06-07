const Contact = require('../models/contactModel');

module.exports.index = (req,res)=>{
    res.render('contact');
}


module.exports.addContact = (req,res)=>{
    const {name, email, contact, subject, message} = req.body;

    Contact.create({
        name : name, 
        email : email, 
        contact : contact, 
        subject : subject, 
        message : message,
        status : false,
    });

    res.json({result : "success"});
}

module.exports.getAdminView = async (req,res)=>{
    const messages = await Contact.findAll();

    res.render('admin/contacts', {messages});
}

module.exports.removeMessage = async (req,res)=>{
    await Contact.destroy({where : {id : req.params.id}});
    res.redirect('/admin/contacts');
}

module.exports.replyMessageGet = (req,res)=>{
    res.render('admin/actions/replyMessage');
}