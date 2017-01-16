// var mainApp = angular.module('mainApp', ['ngRoute']);
// mainApp.config(function($routeProvider) {
//         console.log("loaded!");
//         $routeProvider
//             .when('/login', {
//                 templateUrl: '../partials/partials.login.html',
//                 controller: 'loginCtrl',
//                 controllerAs: 'vm'
//             })
//             .when('/signup', {
//                 templateUrl: '../partials/partials.signup.html',
//                 controller: 'signupCtrl',
//                 controllerAs: 'vm'
//             })
//             .otherwise({
//                 redirectTo: '/signup'
//             });
// });

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
            .otherwise({
                redirectTo: '/signup'
            });
});