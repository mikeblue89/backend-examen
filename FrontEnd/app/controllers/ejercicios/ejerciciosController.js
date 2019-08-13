(()=>{
    'use strict';
    let moduleMain = angular.module('parcialDos');

    moduleMain.provider('userPreferences',[function (){
        let $preferences = [];
    
        this.setUserPreferences = (userPref)=>{
            $preferences = userPref;
        };
    
        this.$get = [()=>{
            var pref = {};
    
            pref.getData = {
                get: ()=>{return $preferences; }
            }
    
            return pref;
        }]; 
    
    }]);

    let config = function(userPreferencesProvider){
        userPreferencesProvider.setUserPreferences([
            {"language": "EN","theme": "Indigo","style": "Modern"},
            {"language": "ESP","theme": "Fire","style": "Gothic"}
        ]);
    }

    config.$inject = ['userPreferencesProvider'];

    moduleMain.config(config);

    moduleMain.controller('ejerciciosController',['redes',function (redes){

        let vm = this;
        vm.redes =redes;
        vm.animales = [
            { name: "Firulais", type: "dog", sex: "male" },
            { name: "Cookie", type: "dog", sex: "female" },
            { name: "Lucas", type: "cat", sex: "male" },
            { name: "Peter", type: "spider", sex: "male" }
        ];
    }],function(userPreferences){
        vm.pref = userPreferences.getData.get();
    });

})();