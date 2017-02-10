angular.module('mainApp').controller( 'skillsCtrl', function($scope, skillsFactory, userFactory) {
    const vm = this;
    vm.test = "test";
    vm.data = skillsFactory.data;
    vm.skillsArray = [];
    vm.user = userFactory.user;

    if (vm.skillsArray.length == 0) {
      vm.emptyArray = true;
    };

    vm.createSkill = function() {
        vm.emptyArray = false;
        var new_skill = angular.copy(vm.skill);
        new_skill.user_id = vm.user._id;
        skillsFactory.postSkill(new_skill);
        vm.skillsArray.push(new_skill);
    };
});
