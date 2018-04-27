const mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    phoneNumber:{type: String, required:true, unique: true},
    merchantID: String,
    vendor: Boolean,
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next){
var current_date = new Date();
this.updated_at = current_date;

    if(!this.created_at){
        this.created_at = current_date;
    }
next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;

