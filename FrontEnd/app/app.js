(()=>{
    'use strict';

    let mainModule = angular.module('parcialDos', ['ui.router']);

    let mainModuleConfig = ($stateProvider, $locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/app/ejercicios');

        let states = [
            {
                name: 'app',
                options: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/app.html',
                    controller: 'appController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.ejercicios',
                options: {
                    title: 'ejercicios',
                    url: '/ejercicios',
                    templateUrl: 'app/controllers/ejercicios/ejercicios.html',
                    controller: 'ejerciciosController',
                    controllerAs: 'vm'
                }
            }
        ];

        states.forEach(state => $stateProvider.state(state.name, state.options));
    };

    mainModule.config(mainModuleConfig);
    mainModuleConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    mainModule.controller("appController", function($state){
        let vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;
        vm.isCollapsedHorizontal = false;

        vm.navbarItems = $state.get();
    });

})();`2`