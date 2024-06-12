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
    const reqDay = new Date(req.body.date).getDay();
    const reqday = new Date(req.body.date);
    const today = new Date();
    let name = req.body.name;
    let availability = false;

    const doc = await doctor.findOne({where : {id : req.params.id}});

    for (const value in doc.availableDates){
        if (getDateIndex(doc.availableDates[value]) === reqDay){
            availability = true;
            break;
        }
        else{
            availability = false;
        }
    }
    if (availability){
        await patient.findOne({where : {email : req.body.email}}).then(async (pat)=>{
            if(pat){
                let time;
                name = pat.name;

                if (getDateString(reqDay) === "monday"){
                    time = doc.workingTime.mondayTime;
                }else if (getDateString(reqDay) === "tuesday"){
                    time = doc.workingTime.tuesdayTime;
                }else if (getDateString(reqDay) === "wednsday"){
                    time = doc.workingTime.wednsdayTime;
                }else if (getDateString(reqDay) === "thursday"){
                    time = doc.workingTime.thursdayTime;
                }else if (getDateString(reqDay) === "friday"){
                    time = doc.workingTime.fridayTime;
                }else if (getDateString(reqDay) === "saturday"){
                    time = doc.workingTime.saturdayTime;
                }else{
                    time = doc.workingTime.sundayTime;
                }

                await channeling.create({
                    time : time,
                    apoinmentNumber : "BK" + (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[0] + (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[1]+ (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[2]+ (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[3],
                    date : req.body.date,
                    paymentState : false,
                    doctorId : req.params.id,
                    patientId : pat.id
                }).then((channel)=>res.render('channelComplete', {channel, name}));
            }
            else{
                let time;

                if (getDateString(reqDay) === "monday"){
                    time = doc.workingTime.mondayTime;
                }else if (getDateString(reqDay) === "tuesday"){
                    time = doc.workingTime.tuesdayTime;
                }else if (getDateString(reqDay) === "wednsday"){
                    time = doc.workingTime.wednsdayTime;
                }else if (getDateString(reqDay) === "thursday"){
                    time = doc.workingTime.thursdayTime;
                }else if (getDateString(reqDay) === "friday"){
                    time = doc.workingTime.fridayTime;
                }else if (getDateString(reqDay) === "saturday"){
                    time = doc.workingTime.saturdayTime;
                }else{
                    time = doc.workingTime.sundayTime;
                }

                await patient.create({
                    name : req.body.name,
                    email : req.body.email,
                    mobile : req.body.phone,
                    address : req.body.address,
                    age : req.body.age,
                    gender : req.body.gender
                }).then(async (pate)=>{
                    await channeling.create({
                        time : time,
                        apoinmentNumber : "BK" + (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[0] + (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[1]+ (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[2]+ (Array(4).fill(0).map(() => Math.floor(Math.random() * (10 - 1 + 1)) + 1))[3],
                        date : req.body.date,
                        paymentState : false,
                        doctorId : req.params.id,
                        patientId : pate.id
                    });
                }).then((channel)=>res.render('channelComplete', {channel, name}))
            }
        });
    }
    else{
        res.json({result : "date"});
    }

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
        case 0 :
            day = "sunday"
            break;
    }

    return day;
}


const getDateIndex = (date)=>{
    let day;

    switch(date){
        case "monday" :
            day = 1;
            break;
        case "tuesday" :
            day = 2;
            break;
        case "wednsday" :
            day = 3;
            break;
        case "thursday" :
            day = 4;
            break;
        case "friday" :
            day = 5;
            break;
        case "saturday" :
            day = 6;
            break;
        case "sunday" :
            day = 0;
            break;
    }

    return day;
}