'use strict'
const jwt = require('jwt-simple');

const moment = require('moment');

const secret ='secret_pin_for_user';

exports.createToken  = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(5,'days').unix
    };

    return jwt.encode(payload, secret);
};
