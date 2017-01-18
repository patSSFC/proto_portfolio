angular.module('mainApp', ['ngRoute'])
    .config(function($routeProvider) {
        console.log("loaded!");
        $routeProvider
            .when('/login', {
                templateUrl: '../partials/partials.login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/signup', {
                templateUrl: '../partials/partials.signup.html',
                controller: 'signupCtrl',
                controllerAs: 'vm'
            })
            .when('/skills', {
              templateUrl: '../partials/partials.skills.html',
              controller: ''
            })
            .otherwise({
                redirectTo: '/signup'
            });
});
