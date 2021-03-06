angular.module('recipeApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template: '<recipe-list></recipe-list>'
                }).
                when('/recipes/:recipeName', {
                    template: '<recipe-detail></recipe-detail>'
                }).
                otherwise('/recipes');
        }
    ]);