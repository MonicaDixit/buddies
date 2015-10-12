'use strict';

angular.module('buddylistApp')
.factory("Gravatar", function GravatarFactory(){
   var avatarsize = 70;
   var avatarUrl = "http://www.gravatar.com/avatar/";
   return {
    generate: function(email){
      return avatarUrl + CryptoJS.MD5(email) + "?d=wavatar&size=" + avatarsize.toString();
    }

   };
});