angular.module('mainApp').controller( 'skillsCtrl', function($scope, skillsFactory, userFactory) {
    const vm = this;
    vm.test = "test";
    vm.data = skillsFactory.data;
    vm.skillsArray = [];
    vm.user = userFactory.user;

    if (vm.skillsArray.length == 0) {
      vm.emptyArray = true;
    };

    console.log("loaded skillsCtrl");

    vm.createSkill = function() {
        vm.emptyArray = false;
        console.log("loaded skillsCtrl");
        var new_skill = angular.copy(vm.skill);
        new_skill.user_id = vm.user._id;
        // console.log(`the newly added skill is "${new_skill.skillName}`);
        // console.log(new_skill);
        skillsFactory.postSkill(new_skill);
        vm.skillsArray.push(new_skill);
    };

    console.log(skillsFactory.data);
});
