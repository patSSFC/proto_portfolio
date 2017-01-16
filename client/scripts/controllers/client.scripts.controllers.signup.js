angular.module('mainApp').controller('signupCtrl', function($scope, signupFactory) {
    var vm = this;
    vm.test = "test";

    console.log("loaded signupCtrl");
    vm.createUser = function() {
        console.log("loaded signupCtrl");
        console.log(vm.user);
        signupFactory.createUser(vm.user);
    }
});
