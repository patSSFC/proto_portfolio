angular.module('mainApp', ['ngRoute', 'ngMaterial'])
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
                templateUrl: '../partials/partials.dashboard.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .when('/skills', {
              templateUrl: '../partials/partials.skills.html',
              controller: 'skillsCtrl',
              controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/login'
            });
});
