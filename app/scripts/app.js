'use strict';

angular.module('AngularJsFunWithUIApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$routeProvider','$dialogProvider', function($routeProvider,$dialogProvider) {
    $dialogProvider.options({backdropClick: false, dialogFade: true});
    $routeProvider.when('/view1', {templateUrl: 'views/todoList', controller: 'TodoListCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'views/contactList', controller: 'ContactListCtrl'});
    $routeProvider.when('/main', {templateUrl: 'views/main', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);

