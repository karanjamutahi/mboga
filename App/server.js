var express = require('express');
var ll = '12menofGod';
var app = express(); 
var bodyParser = require('body-parser');
let os = require('os');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://KaranjaMutahi:${ll}@ds135624.mlab.com:35624/karanja-test`);

if (os.platform() === 'win32'){
    console.log("Windows");
    control = require('C:\\Users\\User\\Code\\mboga\\App\\controllers\\USSDcontroller.js');
}

else{
    console.log("Linux");
    control = require('./controllers/USSDcontroller.js');
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//var AT = require('africastalking')(options);
var port = process.env.PORT || 80;


app.post('/mboga-ussd', control.USSDControl);

app.listen(80);




