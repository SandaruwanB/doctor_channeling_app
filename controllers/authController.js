module.exports.index = (req,res)=>{
    res.render('login');
}

module.exports.performLogin = (req,res)=>{
    console.log(req.body);
    res.send("ok");
}