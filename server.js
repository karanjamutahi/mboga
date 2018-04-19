var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var options = {
    apiKey: 'd35135d87ff9080e216f928d5366cb869d0b97fd826634ab3df8b9cbf6d5892e',
    username: 'sandbox'
};

let USSDcontroller = function USSDcontrol(req,res){
    
    let sessionID = req.body.sessionId ;
    let user = req.body.phoneNumber ;
    let text = req.body.text ;
     
    console.log("SessionID: "+ sessionID);
    console.log("user: "+ user);
    console.log("text:" + text);
    
    if(text === ""){
        res.set({
            'Content-Type':'Text/plain'
        });
        res.send("CON Please Enter Your Location(e.g Kasarani, Juja, Embakasi): \n");
    }
    else if(text === "Kasarani"){
        res.set({
            'Content-Type':'Text/plain'
        });
        res.send("END GoodBye \n");
        res.end();
    }
    res.end();
};

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//var AT = require('africastalking')(options);
var port = process.env.PORT || 80;

app.post('/mboga-ussd', USSDcontroller);

app.listen(port);




