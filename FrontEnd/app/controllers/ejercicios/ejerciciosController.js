(()=>{
    'use strict';
    let moduleMain = angular.module('parcialDos');

    moduleMain.controller('ejerciciosController',['redes',function (redes){

        let vm = this;
        vm.redes =redes;
        vm.animales = [
            { name: "Firulais", type: "dog", sex: "male" },
            { name: "Cookie", type: "dog", sex: "female" },
            { name: "Lucas", type: "cat", sex: "male" },
            { name: "Peter", type: "spider", sex: "male" }
        ]; 
    }]);

})();