angular.module('mainApp').controller('projectCtrl', function($scope, $location, userFactory) {
    const vm = this;

    vm.user = userFactory.user;
    vm.createProject = function() {

    }
});
