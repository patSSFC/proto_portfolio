angular.module('mainApp').controller('userCtrl', function($scope, $location, userFactory) {
    const vm = this;

    console.log("loaded signupCtrl");
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
        console.log(res);
        if(res.status === 200) {
            vm.user = userFactory.user
            $location.path('/skills');
        } else {
            vm.error = res.data;
        }
    }
});
