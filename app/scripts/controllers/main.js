'use strict';

/**
 * @ngdoc function
 * @name buddylistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buddylistApp
 */
angular.module('buddylistApp')
  .controller('MainCtrl', function ($scope, $modal, $firebaseArray) {

     var ref = new Firebase("https://code123.firebaseio.com/buddylist"); 
     var buddyref = ref.child("buddies");
    $scope.currentstatus = "";
    $scope.more = false;

    

    // $scope.initial = function(){
    //   buddyref.set({
    //   RossG: {
    //     firstname: 'Ross',
    //     lastname: 'Gellar',
    //     username: 'RossG',
    //     status : 'Available',
    //     image:"images/ross.jpeg"
    //   },
      
    //   MoniB: {
    //     firstname: 'Monica',
    //     lastname: 'Bing',
    //     username: 'MoniB',
    //     status : 'Available',
    //     image:"images/monica.jpeg"
    //   },

    //   Channy: {
    //     firstname: 'Chandler',
    //     lastname: 'Bing',
    //     username: 'Channy',
    //     status : 'Away',
    //     image:"images/chandler.jpeg"
    //   },

    //   RachG: {
    //     firstname: 'Rachel',
    //     lastname: 'Green',
    //     username: 'RachG',
    //     status : 'Away',
    //     image:"images/rachel.jpeg"
    //   },
      
    //   JoeyT: {
    //     firstname: 'Joey',
    //     lastname: 'Trib',
    //     username: 'JoeyT',
    //     status : 'Offline',
    //     image:"images/joe.jpeg"
    //   },

    //   pheebs: {

    //     firstname: 'Pheobe',
    //     lastname: 'Buffey',
    //     username: 'pheebs',
    //     status : 'Offline',
    //     image:"images/pheebs.jpeg"
    //   }
    // });

    // };

    $scope.buddylist=[{
          firstname: 'Ross',
          lastname: 'Gellar',
           username: 'RossG',
            status : 'Available',
            image:"images/ross.jpeg"
    },
    {
          firstname: 'Monica',
          lastname: 'Bing',
           username: 'MoniB',
            status : 'Available',
             image:"images/monica.jpeg"

    },
          {
           firstname: 'Chandler',
           lastname: 'Bing',
           username: 'Channy',
           status : 'Away',
            image:"images/chandler.jpeg"
       },


       {
           firstname: 'Rachel',
           lastname: 'Green',
           username: 'RachG',
           status : 'Away',
           image:"images/rachel.jpeg"
       },

       {
           firstname: 'Joey',
           lastname: 'Trib',
           username: 'JoeyT',
           status : 'Offline',
           image:"images/joe.jpeg"
       },

       {
           firstname: 'Pheobe',
           lastname: 'Buffey',
           username: 'pheebs',
           status : 'Offline',
           image:"images/pheebs.jpeg"
       }

   ];


   $scope.setcurrentstatus = function(status){
      $scope.currentstatus =  status;

   };


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



var ModalInstanceCtrl = function ($scope, $modalInstance, buddylist) {

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
    var newbud = {
        firstname: newbud.fname,
          lastname: newbud.lname,
           username: newbud.username,
            status : 'Available',
            image:"images/chandler.jpeg"
    }
   
   $scope.buddylist.push(newbud);
  }

};
   
  //});
