const Sequalize = require('sequelize');
const dotenv = require('dotenv');

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
}).catch(err=>{
    console.log(err);
});