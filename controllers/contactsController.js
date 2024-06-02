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
        message : message
    });

    res.json({result : "success"});
}