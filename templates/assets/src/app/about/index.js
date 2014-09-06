/**
 * Created by mmarino on 9/5/2014.
 */
angular.module( 'sailng.about', [
])
.config( ['$stateProvider',function config( $stateProvider ) {
    $stateProvider.state( 'about', {
        url: '/about',
        views: {
            "main": {
                controller: 'AboutCtrl',
                templateUrl: 'about/index.tpl.html'
            }
        }
    });
}])

.controller( 'AboutCtrl',['$scope', 'titleService', function AboutController( $scope, titleService ) {
    titleService.setTitle('About');
}]);