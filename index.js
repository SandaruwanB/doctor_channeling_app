const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const defaultUser = require('./database/defaultUser');
const migration = require('./migration');
const app = express();
const {sequalize} = require('./database/sequalize');

sequalize.authenticate().catch(err=>{
    console.log(err);
});

// uncomment to perform database migrations and seeds

//migration.migrate();
//defaultUser.createDefaultUser();

const PORT = config.serverPort || 8000; 

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use('/', require('./routes/routes'));

app.listen(PORT, ()=>{
    console.log("App running on http://localhost:" + PORT);
});