/**
 * Created by mmarino on 9/5/2014.
 */
angular.module( 'sailng', [
    'ui.router',
    'ngSails',
    'angularMoment',
    'lodash',
    'angularMoment',
    'ui.bootstrap',
    'templates-app',
    'services',
    'models',
    'ngTable',
    'directive.blink',
    'sailng.header',
    'sailng.home',
    'sailng.about',
    'sailng.users'

])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $urlRouterProvider.otherwise(function ($injector, $location) {

        if ($location.$$url === '/') {
            window.location = '/home';
        }
        else {
            // pass through to let the web server handle this request

            window.location = $location.$$absUrl;
        }
    });
    $locationProvider.html5Mode(true);
}])
.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl',['$scope', 'config', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
}]);
