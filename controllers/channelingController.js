const {channeling, patient, doctor, payment} = require('../models/channelingModel');

module.exports.getAdminView = async (req,res)=>{
    const channelings = await channeling.findAll({include : [{model : doctor}, {model : patient}]});

    res.render('admin/channelings', {channelings});
}

module.exports.removeChanneling = async (req, res)=>{
    await channeling.destroy({where : {id : req.params.id}});

    res.redirect('/admin/channelings');
}

module.exports.editChanneling = async (req,res)=>{
    res.render('admin/actions/channelingsForm');
}

module.exports.addChanneling = async (req,res)=>{
    res.render('admin/actions/channelingsAddForm');
}

module.exports.getView = async (req,res)=>{
    const doctors = await doctor.findAll();

    res.render('apoinment', {doctors});
}

module.exports.getDoctorBookingView = async (req,res)=>{
    const doc = await doctor.findOne({where : {id : req.params.id}});

    res.render('doctorBooking', {doc});
}


module.exports.bookAppoinment = async (req,res)=>{
    const reqDay = new Date(req.body.date);
    let equalStatus;

    await doctor.findOne({where : { id : req.params.id}}).then(async (doc)=>{
        for (let i=0; i < doc.availableDates.length; i++){
            if (doc.availableDates[i] === getDateString(reqDay.getDay())){
                console.log("equal");
            }
            else{
                console.log("notequal");
            }
        }
        await patient.findOne({where : {email : req.body.email}}).then((pat)=>{
            if (pat){
                
            }
            else{
    
            }
            
        });
    })


}

const getDateString = (date)=>{
    let day;
    
    switch(date){
        case 1 :
            day = "monday";
            break;
        case 2 :
            day = "tuesday";
            break;
        case 3 :
            day = "wednsday";
            break;
        case 4 :
            day = "thursday";
            break;
        case 5 :
            day = "friday";
            break;
        case 6 :
            day = "saturday";
            break;
        case 7 :
            day = "sunday"
            break;
    }

    return day;
}