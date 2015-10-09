'use strict';

/**
 * @ngdoc function
 * @name buddylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buddylistApp
 */
angular.module('buddylistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
