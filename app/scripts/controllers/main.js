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

    $scope.currentstatus = "";
    $scope.buddylist = [
      {
        fname:"Ross",
        lname:"Gellar",
        username:"RossG",
        status:"Available",
        image:"images/ross.jpeg"
      },

      {
        fname:"Monica",
        lname:"Bing",
        username:"MoniB",
        status:"Available",
        image:"images/monica.jpeg"

      },
      { 
        fname:"Chandler",
        lname:"Bing",
        username:"ChandlerB",
        status:"Offline",
        image:"images/chandler.jpeg"
      },
      {
       fname:"Pheobe",
        lname:"Buffey",
        username:"pheebs",
        status:"Away",
        image:"images/pheebs.jpeg"

      },
      {
       fname:"Joey",
        lname:"Trib",
        username:"JoeyT",
        status:"Offline",
        image:"images/joe.jpeg"
      },

      {
       fname:"Rachel",
        lname:"Green",
        username:"RachG",
        status:"Away",
        image:"images/rachel.jpeg"
      },
     
    ];

    $scope.setstatus = function(status){
      $scope.currentstatus = status;
    };

    $scope.addBuddy = function(){

    };

    

  });
