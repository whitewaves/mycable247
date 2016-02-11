(function() {

    'use strict';

    function Config ($rootScope, $state, Authenticator, AUTH_EVENTS)
    {
        $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

            if ('data' in next && 'authorizedRoles' in next.data) {
                var authorizedRoles = next.data.authorizedRoles;
                if (!AuthService.isAuthorized(authorizedRoles)) {
                    event.preventDefault();
                    $state.go($state.current, {}, {reload: true});
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                }
            }

            if (!Authenticator.isAuthenticated()) {
                if (next.name !== 'login') {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        });
    }

    angular
        .module('wwApp')
        .run(Config, Config);

    Config.$inject = ['$rootScope', '$state', 'Authenticator', 'AUTH_EVENTS'];

})();