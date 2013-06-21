'use strict';

angular.module('AngularJsFunWithUIApp')
  .controller('ContactlistCtrl', ['$scope','contactFactory',function($scope,$contactFactory) {
    $scope.radioModel = 'all';
    $scope.searchText = '';
    $scope.contacts = [
       $contactFactory('John Doe','555-123456','johndoe@nulldomain.com',$scope),
       $contactFactory('Jane Doe','555-654321','johndoe@errordomain.com',$scope),
       $contactFactory('Luke Doe','777-123456','lukedoe@noemail.com',$scope)
    ];
  }]);
