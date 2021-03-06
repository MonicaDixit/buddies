'use strict';

/**
 * @ngdoc overview
 * @name buddylistApp
 * @description
 * # buddylistApp
 *
 * Main module of the application.
 */
angular
  .module('buddylistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/buddies/:id', {
         templateUrl: 'views/profile.html',
         controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
