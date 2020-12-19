'use strict'
const jwt = require('jwt-simple');

const moment = require('moment');

const secret ='secret_pin_for_user';

exports.ensureAuth = function(req, res, next){
if(!req.header.authorization){
return res.status(403).send({message:'wrong authentication header'});
}
var token = req.headers.authorization.replace(/['"]+/g,'');
try{
   var payload = jwt.decode(token, secret);
   if(payload.exp <= moment().unix()){
   return res.status(401).send({message:'token expired'});
   }

}catch(ex){
   // console.log(ex);
   return res.status(404).send({message:'not valid token'});
}
req.user = payload;
next();

};