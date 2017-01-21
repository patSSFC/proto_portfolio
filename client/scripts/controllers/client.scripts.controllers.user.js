angular.module('mainApp').controller('userCtrl', function($scope, userFactory) {
    var vm = this;

    console.log("loaded signupCtrl");
    vm.createUser = function() {
        userFactory.createUser(vm.user);
    }

    vm.loginUser = function() {
        console.log(vm.user.username);
        userFactory.findUser(vm.user.username);
    }
});
