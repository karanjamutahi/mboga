var express = require('express');
var app = express();

var options = {
    apiKey: 'd35135d87ff9080e216f928d5366cb869d0b97fd826634ab3df8b9cbf6d5892e',
    username: 'sandbox'
};

var AT = require('africastalking')(options);
var port = process.env.PORT || 80;

app.post('/mboga-ussd', new AT.USSD((params, next) => {
    let endSession = false;
    let message = '';

    const session = sessions.get(params.sessionId);
    const user = db.getUserByPhone(params.phoneNumber);

    if (params.text === '') {
        message = "Welcome to Nat Oil \n";
        message += "1: For account info \n";
        message += "2: For lost gas cylinder";

    } else if (params.text === '1') {
        message = user.getInfo();
        endSession = true;

    } else if (params.text === '2') {
        message = "Enter 1 for recovery \n";
        message += "Enter 2 for lost and found";
        endSession = true;

    } else {
        message = "Invalid option";
        endSession = true;
    }

    next({
        response: message,
        endSession: endSession
    });
}));

app.listen(port);




