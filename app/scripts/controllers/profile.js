'use strict';

angular.module('buddylistApp')
  .controller('ProfileCtrl', function($scope, $firebaseArray, $routeParams) {
  
  $scope.user = [];

  var id = $routeParams.id;
    console.log('id' , id);

    new Firebase('https://code123.firebaseio.com/buddylist/buddies/'+id).once('value', function(snap) {
      $scope.user = snap.val(); 
      
    });    

});


