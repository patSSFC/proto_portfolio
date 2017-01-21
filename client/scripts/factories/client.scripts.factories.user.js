angular.module('mainApp').factory('userFactory', function($http) {
    var factory = this;

    factory.createUser = function(data) {
        $http.post('/signup', data)
            .then(function(response) {
                console.log(response);
            }, function(err) {
                console.log(err);
            })
    }

    factory.findUser = function (data) {
        console.log("value pass to factory " + data);
        $http.get('/login/'+ data)
            .then(function(response) {
                console.log(response);
            }, function(err) {
                console.log(err);
            });
    }
    return factory;
});
