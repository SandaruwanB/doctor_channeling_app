const Sequalize = require('sequelize');

const user = process.env.DB_USER_PASSWORD;

const sequalize = new Sequalize(
    'mysql',
    'root',
    'Sanda@12',
    {
        'host' : 'localhost',
        'dialect' : 'mysql'
    }
);

module.exports.connection = sequalize.authenticate().then(()=>{
    console.log("authenticated");
    console.log(process.env.DB_USER)
    console.log(user);
}).catch(err=>{
    console.log(err);
});