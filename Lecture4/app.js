(function(){
'use strict';
  angular.module('myFirstApp',[])

  .controller('MyFirstController',function($scope) {
    $scope.name="Antonio";
    $scope.sayHello=function(dueName){
      return "Hello " + dueName;
    }
  });
})();
