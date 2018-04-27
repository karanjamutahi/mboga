const os = require('os');

if (os.platform() === 'win32'){
    user = require('C:\\Users\\User\\Code\\mboga\\App\\models\\users.js');
    menus = require('C:\\Users\\User\\Code\\mboga\\App\\views\\menus.js');
}

else{
    user = require('./App/models/users.js');
    menus = require('./App/views/menus.js');
}



exports.USSDControl = (req, res) => {
    res.set({
        'Content-Type':'Text/plain'
    });

   async function doKYC(number){
        var currentUser = new user({
            phoneNumber:number,
            vendor:false
        });

        await currentUser.save((err)=>{
            if(err)
                console.log("MongoDB Save Error: ", err);
            
            console.log('KYC Done');
            
        });
        console.log(menus.KYCMessage);
        res.send(menus.KYCMessage);
        }

    let sessionID = req.body.sessionId ;
    let userPhone = req.body.phoneNumber ;
    let text = req.body.text ;
    let code = req.body.serviceCode;
    let knowUser = false; 

    switch(text){
        case "":
        //Check if we've done KYC
        user.find({phoneNumber:userPhone}, (err, foundUser)=>{
            if (err){
                console.log("MongoDB search error: ", err);
            }
            else if(foundUser.length){
                console.log("MongoDB Found a User: ", foundUser);
                //respond here with non-KYC message
                knowUser = true; 
            res.send(menus.welcomeMenu(userPhone));
            } 

            //respond with KYC function
            if(!knowUser){
                doKYC(userPhone);
            }
            

        });
        break;

        case "Kasarani":

        break;

    }

}
