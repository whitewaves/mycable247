(function() {

    'use strict';

    angular
        .module('wwApp')
        .constant
        ({
            'API_URL': 'http://auth.wavesapi.new/api/v1',
            'API_KEY': 'P0qFTuf4rRuobgbr',
            'domain': 'http://authapi.dev/'
        })

        .constant('AUTH_EVENTS', {
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        })

        .constant('USER_ROLES', {
            admin: 'admin_role',
            public: 'public_role'
        });
})();