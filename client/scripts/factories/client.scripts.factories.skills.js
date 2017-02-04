angular.module('mainApp').factory('skillsFactory', function($http) {
    var factory = this;
    // creating an array of all skill types
    factory.numbers = [{count: 1}, {count: 2}, {count: 3}];

    factory.data = ['HTML', 'CSS', 'Sass', 'LESS', 'JavaScript', 'jQuery', 'Node.js', 'AngularJS', 'React', 'Vue.js', 'D3.js', 'Ruby', 'Ruby on Rails', 'Rack', 'Sinatra', 'Padrino', 'Cramp', 'Cuba', 'Merb', 'Camping', 'Hobo', 'Ramaze', 'raptor', 'pakyow', 'Renee', 'Rango', 'Scorched', 'lattice', 'Harbor', 'vanilla', 'marley', 'Bats', 'Espresso', 'strelka', 'salad', 'gin'];

    factory.postSkill = function(data) {
        // console.log(userId);
        console.log(data);
        $http.post('/skills', data)
            .then(function(response) {
              console.log(response);
            }, function(err) {
              console.log(err);
            })
    };
    return factory;
});
