/* global angular */
angular.module('ua5App.map')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('map', {
            url: '/map',
            templateUrl: 'states/map/map.html',
            controller: 'mapCtrl',
            controllerAs: 'ctrl'
        });
    }])
    .controller('mapCtrl', [function() {}])
;
