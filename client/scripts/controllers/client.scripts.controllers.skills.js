angular.module('mainApp').controller( 'skillsCtrl', function($scope, skillsFactory) {
    var vm = this;
    vm.test = "test";

    console.log("loaded skillsCtrl");
    vm.createSkill = function() {
        console.log("loaded skillsCtrl");
        console.log(vm.skill);
        skillsFactory.createSkill(vm.skill);
    };
    console.log(factory.data);
});
