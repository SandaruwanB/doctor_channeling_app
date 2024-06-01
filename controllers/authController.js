module.exports.index = (req,res)=>{
    res.render('login');
}

module.exports.performLogin = (req,res)=>{
    const {email, password} = req.body;
    res.json({result : "success"});
} 