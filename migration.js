const {sequalize} = require('./database/sequalize');
require('./models/userModel');

sequalize.sync({force : true}).then(()=>{
    console.log("Tables Created");
    return;
}).catch(err=>{
    console.log(err);
});
