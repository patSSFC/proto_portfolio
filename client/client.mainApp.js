angular.module('mainApp', ['ngRoute'])
    .config(function($routeProvider) {
        console.log("loaded!");
        $routeProvider
            .when('/login', {
                templateUrl: '../partials/partials.login.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .when('/signup', {
                templateUrl: '../partials/partials.signup.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .when('/dashboard', {
                templateUrl: '../partials/partials.dashboard.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
});
