const {sequalize} = require('./database/sequalize');
require('./models/userModel');

module.exports.migrate = ()=>{
    sequalize.sync({force : true}).then(()=>{
        console.log("Tables Created");
        return;
    }).catch(err=>{
        console.log(err);
    });
}
