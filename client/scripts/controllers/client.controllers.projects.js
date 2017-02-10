angular.module('mainApp').controller('projectCtrl', function($scope, $location, userFactory) {
    const vm = this;

    vm.user = userFactory.user;
    vm.user_skills = vm.user._skills;
    vm.selected_skills = [];
    vm.logSkills = function() {
        console.log(vm.selected_skills);
        console.log(typeof(vm.selected_skills[0]));
    }
});
