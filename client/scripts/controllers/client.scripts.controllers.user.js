angular.module('mainApp').controller('userCtrl', function($scope, $location, userFactory) {
    var vm = this;

    console.log("loaded signupCtrl");
    vm.redir = function() {
        $location.path("/signup");
    };
    vm.createUser = function() {
        userFactory.createUser(vm.user, responseHandler);
    }

    vm.loginUser = function() {
        console.log(vm.user.username);
        userFactory.findUser(vm.user.username, responseHandler);
    }

    function responseHandler(res) {
        console.log(res);
        if(res.status === 200) {
            $location.path('/dashboard');
        } else {
            vm.error = res.data;
        }
    }
});
