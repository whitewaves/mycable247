(function() {

    'use strict';

    function Config ($mdThemingProvider, $stateProvider, $urlRouterProvider)
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

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey' , {
                'default': '900',
                'hue-1': '400',
                'hue-2': '200',
                'hue-3': '50'
            })
            .accentPalette('lime', {
                'default': 'A700',
                'hue-1': 'A200'
            })
            .warnPalette('red');
    }

    angular
        .module('wwApp')
        .config(Config, Config);

    Config.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];

})();