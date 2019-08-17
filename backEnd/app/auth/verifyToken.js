const jwt = require('jsonwebtoken');
const config = require('./secrets');
const wrapper = require('../utils/wrapper');

const verifyToken = (req, res, next)=>{
    let token = req.header('x-access-token') || req.header('Authorization');
    if(!token){
        let response = {'status': 'error', 'message': 'There is no token', 'error': true, 'data': undefined};
        return wrapper.sendResponse({method: 'auth: verify token', response: response, httpCode: 401, res: res});
    } else {
        token = token.split(' ');
        if(!token || token.lenght <= 1 || token[0] !== 'Bearer'){
            let response = {'status': 'error', 'message': 'Invalid token', 'error': true, 'data': undefined};
            return wrapper.sendResponse({method: 'auth: validate token', response: response, httpCode: 401, res : res});
        }else{
            token = token[1];
            jwt.verify(token, config.secret, (err, decoded)=>{
                if(err){
                    let response = {'status': 'error', 'message': 'Token was not authenticated', 'error': true, 'data': undefined};
                    return wrapper.sendResponse({method: 'auth: authenticate token', response: response, httpCode: 401, res: res});
                }

                req.id = decoded.id;
                next();
            }); 
        }
    }
}

module.exports = verifyToken;