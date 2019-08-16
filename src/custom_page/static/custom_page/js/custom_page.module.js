(function() {
    'use strict';
    angular
        .module('customPage', [
        'ngResource',
        'ngRoute',
        'debounce',
        ])
        .config(customPageConfig)
        .run(locationListener);

    function customPageConfig($locationProvider, $resourceProvider) {
        //Add your custom configs
        $locationProvider.html5Mode({enabled: true,requireBase: false,rewriteLinks:false});
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }

    function locationListener($rootScope, $location) {
        $rootScope.$on('$locationChangeSuccess', function () {
            $rootScope.actualLocation = $location.absUrl();
        });

        $rootScope.$watch(function () {
            return $location.absUrl();
        }, function (newLocation, oldLocation) {
            if ($rootScope.actualLocation === newLocation) {
                $rootScope.$broadcast('getParamsChanged');
            }
        });
    }
})();