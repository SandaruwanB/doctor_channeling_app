const Contact = require('../models/contactModel');
const transporter = require('../mailTransporter');
const config = require('../config');

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

module.exports.replyMessageGet = async (req,res)=>{
    const message = await Contact.findOne({where : {id : req.params.id}});

    res.render('admin/actions/replyMessage', {message});
}

module.exports.markAsRead = async (req,res)=>{
    await Contact.update({status : true}, {where : {id : req.params.id}});

    res.redirect('/admin/contacts');
}

module.exports.sendMail = async (req,res)=>{
    const mailOptions = {
        from : config.mailUser,
        to : req.body.email,
        subject : req.body.subject,
        text : req.body.message
    };

    await transporter.transporter.sendMail(mailOptions, (err, info)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log("email sended");
        }
    });

    await Contact.update({status : true}, {where : {id : req.params.id}});

    res.redirect('/admin/contacts');
}