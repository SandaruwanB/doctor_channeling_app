module.exports.getHome = (req,res)=>{
    const users = [
        {
            'name' : 'kasun',
            'age' : 22,
        },
        {
            'name' : 'nimal',
            'age' : 28,
        },
    ]


    res.render('index', {users});
}