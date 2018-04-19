let USSDController = function(req, res){
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
}

module.exports.USSDControl = USSDController;