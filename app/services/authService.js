(function() {

    'use strict';

    function Authenticator ($q, $http, store, jwtHelper)
    {
        var LOCAL_TOKEN_KEY = '';
        var username = "";
        var authToken;

        var service = {
            login: login,
            logout: logout,
            isAuthorized: isAuthorized,
            isAuthenticated: isAuthenticated,
            username: username
        };

        loadUserCredentials();

        return service;

        //External Functions
        function login() {

        }

        function logout() {
            destroyUserCredentials();
        }

        function isAuthorized() {

        }

        function isAuthenticated() {

        }

        function username() {
            return username;
        }

        //Internal Functions
        function loadUserCredentials() {
            var token = store.get(LOCAL_TOKEN_KEY);
            if(token) {
                useCredentials(token);
            }
        }

        function storeUserCredentials(token) {
            store.set(LOCAL_TOKEN_KEY, token);
            useCredentials(token);
        }

        function useCredentials(token) {
            //username = token;
            isAuthenticated = true;
            authToken = token;
            currentUser(token);
        }

        function destroyUserCredentials() {
            authToken = undefined;
            username = '';
            isAuthenticated = false;
            store.remove(LOCAL_TOKEN_KEY);
        }

        function currentUser(token) {
            var jwt = jwtHelper.decodeToken(token);
            username = jwt.username;
        }

    }

    angular
        .module('wwApp')
        .factory('Authenticator', Authenticator);

    Authenticator.$inject = ['$q', '$http', 'store', 'jwtHelper'];

})();