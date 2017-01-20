angular.module('mainApp').factory('skillsFactory', function($http) {
    var factory = this;

    factory.createSkill = function(data) {
        $http.post('/skills', data)
            .then(function(response) {
              console.log(response);
            }, function(err) {
              console.log(err);
            })
    }
    return factory;
});
