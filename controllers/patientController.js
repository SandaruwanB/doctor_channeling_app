module.exports.getPatients = async (req,res)=>{
    res.render('admin/patients');
}

module.exports.editPatients = async (req,res)=>{
    res.render('admin/actions/patientsForm');
}