(function() {

    'use strict';

    function Config ($httpProvider)
    {
        $httpProvider.interceptors.push('AuthInterceptor');
    }

    angular
        .module('wwApp')
        .config(Config, Config);

    Config.$inject = ['$httpProvider'];

})();