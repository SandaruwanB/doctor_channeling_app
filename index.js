const express = require('express');
const config = require('./config');
const app = express();
const conn = require('./database/sequalize');

const PORT = config.serverPort || 8000; 

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use('/', require('./routes/routes'));


app.listen(PORT, ()=>{
    console.log("App running on http://localhost:" + PORT);
});