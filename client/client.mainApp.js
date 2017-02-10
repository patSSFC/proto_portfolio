angular.module('mainApp', ['ngRoute'])
    .config(function($routeProvider) {
        console.log("loaded!");
        $routeProvider
            .when('/login', {
                templateUrl: '../partials/onboard/partials.login.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .when('/signup', {
                templateUrl: '../partials/onboard/partials.signup.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .when('/projects', {
                templateUrl: '../partials/onboard/partials.projects.html',
                controller: 'projectCtrl',
                controllerAs: 'vm'
            })
            .when('/skills', {
              templateUrl: '../partials/onboard/partials.skills.html',
              controller: 'skillsCtrl',
              controllerAs: 'vm'
            })
            .when('/dash', {
              templateUrl: '../partials/dash/partials.dash.html'
            })
            .when('/portfolio', {
              templateUrl: '../partials/portfolio/partials.portfolio.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
});
