(function() {
    'use strict';

    function AppCtrl (Authenticator)
    {
        var vm = this;
        //create a service to fetch page title
        //var title = 'Whitewaves Authenticator';

        vm.title = 'Login'

    }

    angular
        .module('wwApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['Authenticator'];
})();