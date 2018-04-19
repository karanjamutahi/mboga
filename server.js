var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var options = {
    apiKey: 'd35135d87ff9080e216f928d5366cb869d0b97fd826634ab3df8b9cbf6d5892e',
    username: 'sandbox'
};

app.use(bodyParser.json());
//var AT = require('africastalking')(options);
var port = process.env.PORT || 80;

app.post('/mboga-ussd', (req, res, next) =>{
    console.log(req.body);
    res.end();
});

app.listen(port);




