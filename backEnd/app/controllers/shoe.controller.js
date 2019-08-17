const Shoe = require('../models/shoe.model');
const wrapper = require('../utils/wrapper');

let isValid = (Shoe)=>{
    if(!Shoe.name){
        return {isValid: false, propertyInvalid: 'name'};
    }else if(!Shoe.code){
        return {isValid: false, propertyInvalid: 'code'};  
    }else if(!Shoe.barCode){
        return {isValid: false, propertyInvalid: 'barCode'};
    }else if(!Shoe.model){
        return {isValid: false, propertyInvalid: 'model'};
    }else{
        return {isValid: true, propertyInvalid: undefined};
    }
}

exports.metadata = (req, res)=>{
    let response = {'status': 'Okay', 'message': 'shoe metadata was successfully queried', 'error': false, 'data': Shoe.schema.paths};
    return wrapper.sendResponse({method: 'GET /api/shoe/metadata', response: response, httpCode: 200, res: res});
};

exports.create = (req, res)=>{
    if(!req.body){
        let response = {'status': 'error', 'messsage': 'Shoe content cannot be empty', 'error': true, 'data': undefined};
        return wrapper.sendResponse({method: 'POST /api/shoe', response: response, httpCode: 400, res: res});
    }else{
        const newShoe = new Shoe({
            name: req.body.name,
            code: req.body.code,
            barCode: req.body.barCode,
            gender: req.body.gender,
            price: req.body.price,
            brand: req.body.brand,
            model: req.body.model,
            size: req.body.size
        });

        let validation = isValid(newShoe);

        if(!validation.isValid){
            let response = {'status': 'error', 'message': 'Shoe '+ validation.propertyInvalid+' is required', 'error': true, 'data': newShoe};
            return wrapper.sendResponse({method: 'POST /api/shoe', response: response, httpCode: 400, res:res});
        }else{
            newShoe.save()
                .then(data =>{
                    let response = {'status': 'Okay', 'message': 'Shoe was saved', 'error': false, 'data': data};
                    return wrapper.sendResponse({method: 'POST /api/shoe', response: response, httpCode: 202, res: res});
                }).catch(error =>{
                    let response = {'status': 'error', 'message': 'Shoe was not created', 'error': false, 'data': error.message || undefined};
                    return wrapper.sendResponse({method: 'POST /api/shoe', response: response, httpCode: 500, res: res});
                });
        }
    }
};