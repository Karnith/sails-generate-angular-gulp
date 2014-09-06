/**
 * Created by mmarino on 9/5/2014.
 */
angular.module( 'services.config', ['lodash'])
.service('config',['lodash', function(lodash) {

    // private vars here if needed

    return {
        siteName: 'MEANS Seed',
        // no trailing slash!
        siteUrl: '/',
        apiUrl: '/api',

        currentUser: false
    };
}]);