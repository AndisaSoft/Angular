(function(){
'use strict';
angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject=['$scope'];
function MsgController($scope){
  $scope.name="Antonio";

  $scope.sayMessage=function(){
    return "Hi there " + $scope.name;
  }
}

})();
