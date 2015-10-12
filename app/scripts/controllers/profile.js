'use strict';

angular.module('buddylistApp')
  .controller('ProfileCtrl', function($scope, $firebaseArray, $routeParams) {
  
  $scope.user = [];

  var id = $routeParams.id;
    console.log('id' , id);

    //var ref = JSON.stringify(new Firebase("https://code123.firebaseio.com/buddylist/buddies/"+id).once('value', show);
    new Firebase('https://code123.firebaseio.com/buddylist/buddies/'+id).once('value', function(snap) {
      console.log('I fetched a user!', snap.val());
      $scope.user = snap.val(); 
});
    

  });


