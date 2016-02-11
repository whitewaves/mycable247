(function() {

    'use strict';

    function AuthInterceptor ($rootScope, $q, AUTH_EVENTS)
    {
        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized
                }[response.status], response);
                return $q.reject(response);
            }
        };
    }

    angular
        .module('wwApp')
        .factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

})();