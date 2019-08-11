(()=>{
    'use strict';
    let moduleMain = angular.module('parcialDos',['prefModule']);

    let config = function(userPreferencesProvider){
        userPreferencesProvider.setUserPreferences([{"language": "EN","theme": "Indigo","style": "Modern"},{"language": "ESP","theme": "Fire","style": "Gothic"}]);
    }

    config.$inject = ['userPreferencesProvider'];

    moduleMain.config(config);

    moduleMain.controller('ejerciciosController',['redes',function (redes,pref){

        let vm = this;
        vm.redes =redes;
        vm.animales = [
            { name: "Firulais", type: "dog", sex: "male" },
            { name: "Cookie", type: "dog", sex: "female" },
            { name: "Lucas", type: "cat", sex: "male" },
            { name: "Peter", type: "spider", sex: "male" }
        ]; 
        vm.pref = pref.getData.get();
    }]);

})();