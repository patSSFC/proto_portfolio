angular.module('mainApp').factory('userFactory', function($http) {
    var factory = this;

    factory.createUser = function(data, callback) {
        $http.post('/signup', data)
            .then(function(response) {
                callback(response);
            }, function(err) {
                callback(err);
            });
    }

    factory.findUser = function (data, callback) {
        $http.get('/login/'+ data)
            .then(function(response) {
                factory.user = response.data.user;
                callback(response);
            }, function(err) {
                callback(err);
            });
    }

    return factory;
});
