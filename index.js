const express = require('express');
const dotenv = require('dotenv');
const app = express();
const conn = require('./database/sequalize');
dotenv.config({path : '.env'});
const PORT = process.env.PORT || 8000; 

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use('/', require('./routes/routes'));


app.listen(PORT, ()=>{
    console.log("App running on http://localhost:" + PORT);
});