const pg = require('pg');
const db = {
    user:'iuuqultwlcvcth',
    host:process.env.DATABASE_URL || "postgres://iuuqultwlcvcth:2a3646f6ddbd56c214d723089d0629d34ba87cc9a411c12bceeb52905883c100@ec2-23-23-247-222.compute-1.amazonaws.com:5432/denve29qr9id0b",
    port:5432,
    password:'2a3646f6ddbd56c214d723089d0629d34ba87cc9a411c12bceeb52905883c100',
    database:'denve29qr9id0b',
};

const pgclient = new pg.Client('postgres://iuuqultwlcvcth:2a3646f6ddbd56c214d723089d0629d34ba87cc9a411c12bceeb52905883c100@ec2-23-23-247-222.compute-1.amazonaws.com:5432/denve29qr9id0b');

pgclient.connect(); //need to pass uname and passwd

pgclient.query('CREATE TABLE users(id SERIAL PRIMARY KEY, phoneNumber VARCHAR(13) not null, location VARCHAR(50), complete BOOLEAN)',
                (err,res)=>{
                    if (err){
                        console.log("ERROR: ", err);
                    }
                    else{
                        console.log(res);
                        pgclient.end();
                    }
                });
