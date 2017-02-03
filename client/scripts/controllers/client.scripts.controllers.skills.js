angular.module('mainApp').controller( 'skillsCtrl', function($scope, skillsFactory) {
    var vm = this;
    vm.test = "test";
    vm.data = skillsFactory.data;
    vm.skillsArray = [];

    console.log("loaded skillsCtrl");
    vm.createSkill = function() {
        console.log("loaded skillsCtrl");
        console.log(vm.skill);
        skillsFactory.createSkill(vm.skill);
        vm.skillsArray.push(vm.skill);
        console.log(vm.skillsArray);
    };
    console.log(skillsFactory.data);
});
