'use strict';

/**
 * @ngdoc function
 * @name buddylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buddylistApp
 */
angular.module('buddylistApp')
  .controller('MainCtrl', function ($scope, $modal, $firebaseArray, Gravatar) {

     var ref = new Firebase("https://code123.firebaseio.com/buddylist/buddies"); 
     $scope.buddylist = $firebaseArray(ref);
     $scope.currentstatus = "";
     $scope.more = false;
     
     console.log($scope.buddylist);
    
    var profile = {
           firstname: 'Joey',
           lastname: 'Trib',
           username: 'JoeyT',
           status : 'Offline',
           image:"images/joe.jpeg"
    };

   $scope.setcurrentstatus = function(status){
      $scope.currentstatus =  status;
   };


   $scope.deletebuddy = function(id) {
        $scope.buddylist.$remove(id);
      }


    $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: '/views/myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        buddylist: function () {
          return $scope.buddylist;
        }
      }
    });

    modalInstance.result.then(function (newbud) {
      $scope.newbud = newbud;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };
});



var ModalInstanceCtrl = function ($scope, $modalInstance, buddylist, Gravatar, Firebase) {

  var i = 4;
  $scope.buddylist = buddylist;

  $scope.ok = function () {
    $modalInstance.close($scope.newbud);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  $scope.addbuddy= function(newbud) {
    console.log('newbud' , newbud);
    console.log('bdate' , new Date(newbud.birthday.toString()).toDateString());
    var ele = new Date(newbud.birthday.toString()).toDateString().substring(4,10);
    var ele2 =  moment().format('MMMM Do YYYY, h:mm:ss a');
    var newbud = {
        firstname: newbud.fname,
          lastname: newbud.lname,
           username: newbud.username,
           email: newbud.email,
            status : 'Available',
            birthday: ele,
            image:getavatar(newbud.email),
            lastSeenAt: ele2.toString()
    }
   
   $scope.buddylist.$add(newbud);
  }


  var getavatar = function(email){
    console.log('to get gravatar');
    return Gravatar.generate(email);

  }

};
   
