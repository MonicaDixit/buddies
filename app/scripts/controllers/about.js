'use strict';

/**
 * @ngdoc function
 * @name buddylistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the buddylistApp
 */
angular.module('buddylistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
