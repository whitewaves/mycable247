(function() {

    'use strict';

    function Config ($mdThemingProvider)
    {
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

    Config.$inject = ['$mdThemingProvider'];
})();