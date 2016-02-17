angular.module("userProfiles").controller("controller", function ($scope, service) {
  $scope.getUsers = function(input) {
    service.receive(input);
  }

})
