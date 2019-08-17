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