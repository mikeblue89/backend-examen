let preferencesModule = angular.module('prefModule',['ui.bootstrap']);

preferencesModule.provider('userPreferences',[function (){
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
