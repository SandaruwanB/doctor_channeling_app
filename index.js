const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path : '.env'});
const PORT = process.env.PORT || 8000; 

app.set('view engine', 'ejs');
app.use('/', require('./routes/routes'));


app.listen(PORT, ()=>{
    console.log("App running on http://localhost:" + PORT);
});