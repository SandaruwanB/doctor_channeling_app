module.exports.index = (req,res)=>{
    res.render('contact');
}


module.exports.addContact = (req,res)=>{
    console.log(req.body);
    res.json({result : "success"});
}