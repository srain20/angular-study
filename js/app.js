  var app = angular.module('myApp', [ 
    'ui.bootstrap',
    'ngAnimate',
    "ngTouch",
    "ngSanitize",
    'ui.router',
    'ngSanitize',
    'ngResource',
    //'ngStorage',
  ]);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('root', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'views/home/home.html'
    })
    .state('index', {
      url: '/index',
      controller: 'HomeController',
      templateUrl: 'views/home/home.html'
    })

    $locationProvider.html5Mode(true);
  }]);