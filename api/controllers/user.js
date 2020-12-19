'use strict '
const bcrypt = require('bcrypt-nodejs');
const user = require('../model/user');
const User = require("../model/user");
const jwt = require('../services/jwt');

function testing( req, res){
    res.status(200).send({
    message:"testing"
    });
}
function saveUser(req, res){
var user = new User();

var params = req.body;

console.log(params)

user.name = params.name;
user.surname = params.surname;
user.email = params.email;
user.role = 'ROLE_USER';
user.image = 'null';

if(params.password){
    //encrypting password 
    bcrypt.hash(params.password,null, null, function(err, hash){
    user.password = hash;

if(user.name != null && user.surname != null && user.email  != null){
    //safe user
 user.save((err, userStored) =>{
    if(err){
        res.status(500).send({message:'Error to save user'});



    }else{
        if(!userStored){
            res.status(404).send({message:'Not user records'});
        }else{

          res.status(200).send({user: userStored});
        }
    }
 });

}else{
  //error message 
  res.status(200).send({message:'Please enter all the information need it'});
}
    });
}else{
    res.status(200).send({message:'Enter password'});
}
}

function loginUser(req, res){
var params = req.body;

var email= params.email;
var password = params.password;
User.findOne({email:email.toLowerCase()},(err, user)=>{
if(err){
    res.status(500).send({message:'error request'});
}else{
    if(!user){
      res.status(404).send({message:'User not found'});
    }else{
        //check password
        bcrypt.compare(password, user.password, function(err, check){
            if(check){
                // return user data
              if(params.getHash){
                  // return one toke from jwt
                  res.status(200).send({
                      token:jwt.createToken(user
                        )
                  });
              }else{
                  res.status(200).send({user});
              }
            }else{
                res.status(404).send({message:'User login problems'});
            }
        });
    }
}
});

}

function updateUser(req, res){
    var userID = req.params.id;
    var update = req.body;
    user.findByIdAndUpdate(userId, update, (err, userUpdated) =>{
        if(err){
            res.status(500).send({message:'updated error'});
        }else{
            if(!userUpdated){
                res.status(404).send({message:'user information was not loaded '});
            }else{
                res.status(200).send({user:userUpdated});
            }
        }
    });
}
// function uploadImage(req, res){
//     var userId = req.params.id;
//     var file_name = 'empty file..';

//     if(req.files){
//     var file_path = req.files.image.path;
//     var file_split
//     console.log(file_path );
//     }else{
//         res.status(200).send({message:'file was not upload'});
//     }
// }
module.exports = {
 testing,
 saveUser,
 loginUser,
 updateUser,
//  uploadImage
};