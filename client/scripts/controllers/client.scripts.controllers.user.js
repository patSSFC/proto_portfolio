angular.module('mainApp').controller('userCtrl', function($scope, $location, userFactory) {
    const vm = this;

    vm.user=userFactory.user;
    vm.redir = function() {
        $location.path("/signup");
    };
    vm.createUser = function() {
        userFactory.createUser(vm.user, responseHandler);
    }

    vm.loginUser = function() {
        userFactory.findUser(vm.user.username, responseHandler);
    }

    function responseHandler(res) {
        if(res.status === 200) {
            vm.user = userFactory.user
            $location.path('/projects');
        } else {
            vm.error = res.data;
        }
    }
});
