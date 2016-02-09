(function() {

    'use strict';

    function Config ($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/views/login.html'
            })
            .state('password-reset', {
                url: '/password-reset',
                templateUrl: 'app/views/password-reset.html'
            })
            .state('backend', {
                url: '/admin',
                templateUrl: 'app/views/backend.html'
            });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go("login");
        });

    }

    angular
        .module('wwApp')
        .config(Config, Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

})();