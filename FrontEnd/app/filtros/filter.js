(()=>{
    'use strict';
    let module = angular.module('parcialDos');
    
    module.filter('filterExamen',() =>{
        return (array, optionSelected)=>{
            let results = [];
            switch(optionSelected){
                case "dog":{
                    array.forEach(element => {
                        if(element.type == "dog") results.push(element);
                    });
                    break;
                }
                case 'cat':{
                    array.forEach(element =>{
                        if(element.type == 'cat') results.push(element);
                    });
                    break;
                }
                case 'spider':{
                    array.forEach(element => {
                        if(element.type == 'spider') results.push(element);
                    });
                    break;
                }
                case 'male':{
                    array.forEach(element => {
                        if(element.sex == 'male') results.push(element);
                    });
                    break;
                }
                case 'female': {
                    array.forEach(element => {
                        if(element.sex == 'female') results.push(element);
                    });
                    break;
                }
                default:{
                    results = array;
                    break;
                }
            }
            return results;
        }
    });
})();