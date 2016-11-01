var app = angular.module("movie_search", ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MoviesController'
      })
      .when('/show_page/:id', {
        templateUrl: 'partials/show_movie.html',
        controller: 'MoviesController'
      })
});
