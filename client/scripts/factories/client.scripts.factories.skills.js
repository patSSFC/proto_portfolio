angular.module('mainApp').factory('skillsFactory', function($http) {
    var factory = this;

    var skill_names = {
      name: 'HTML',
      name: 'CSS',
      name: 'Vanilla',
      name: 'Sass',
      name: 'LESS',
      name: 'JavaScript',
      name: 'jQuery',
      name: 'Node.js',
      name: 'AngularJS',
      name: 'React',
      name: 'Vue.js',
      name: 'D3.js',
      name: 'Ruby',
      name: 'Ruby on Rails',
      name: 'Rack',
      name: 'Sinatra',
      name: 'Padrino',
      name: 'Cramp',
      name: 'Cuba',
      name: 'Merb',
      name: 'Camping',
      name: 'Hobo',
      name: 'Ramaze',
      name: 'raptor',
      name: 'pakyow',
      name: 'Renee',
      name: 'Rango',
      name: 'Scorched',
      name: 'lattice',
      name: 'Harbor',
      name: 'vanilla',
      name: 'marley',
      name: 'Bats',
      name: 'Espresso',
      name: 'strelka',
      name: 'salad',
      name: 'gin'
    };

    // creating an array of all skill types
    factory.numbers = [{count: 1}, {count: 2}, {count: 3}];

    factory.data = skill_names;



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
