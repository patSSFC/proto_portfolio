angular.module('mainApp').controller( 'skillsCtrl', function($scope, skillsFactory) {
    const vm = this;
    vm.test = "test";
    vm.data = skillsFactory.data;

    console.log("loaded skillsCtrl");
    vm.createSkill = function() {
        console.log("loaded skillsCtrl");
        console.log(vm.skill);
        skillsFactory.createSkill(vm.skill);
    };
    console.log(skillsFactory.data);
});
