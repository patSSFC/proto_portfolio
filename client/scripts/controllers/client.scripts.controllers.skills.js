angular.module('mainApp').controller( 'skillsCtrl', function($scope, skillsFactory) {
    var vm = this;
    vm.test = "test";
    vm.data = skillsFactory.data;
    vm.skillsArray = [];

    console.log("loaded skillsCtrl");

    vm.createSkill = function() {
        console.log("loaded skillsCtrl");
        var new_skill = angular.copy(vm.skill);
        console.log(`the newly added skill is "${new_skill.skillName}`);
        skillsFactory.postSkill(new_skill);
        vm.skillsArray.push(new_skill);
        console.log(vm.skillsArray);
    };

    console.log(skillsFactory.data);
});
