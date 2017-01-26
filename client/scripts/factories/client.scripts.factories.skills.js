angular.module('mainApp').factory('skillsFactory', function($http) {
    var factory = this;

    // creating an array of all skill types
    factory.numbers = [{count: 1}, {count: 2}, {count: 3}];

    factory.data = [{
        name: 'HTML',
        type: null
      }, {
        name: 'CSS',
        type: ['Vanilla', 'Sass', 'LESS']
      }, {
        name: 'JavaScript',
        type: ['Vanilla', 'jQuery', 'Node.js', 'AngularJS', 'React', 'Vue.js', 'D3.js']
      }, {
        name: 'Ruby',
        type: ['Ruby on Rails', 'Rack', 'Sinatra', 'Padrino', 'Cramp', 'Cuba', 'Merb', 'Camping', 'Hobo', 'Ramaze', 'raptor', 'pakyow', 'Renee', 'Rango', 'Scorched', 'lattice', 'Harbor', 'vanilla', 'marley', 'Bats', 'Espresso', 'strelka', 'salad', 'gin']
      }
    ];

    factory.createSkill = function(data) {
        $http.post('/skills', data)
            .then(function(response) {
              console.log(response);
            }, function(err) {
              console.log(err);
            })
    };
    return factory;
});
