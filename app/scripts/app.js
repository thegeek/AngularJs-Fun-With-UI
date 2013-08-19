'use strict';

angular.module('AngularJsFunWithUIApp', ['ngRoute','ui.bootstrap','ngSanitize'])
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
    $dialogProvider.options({backdropClick: false, dialogFade: true, templateUrl: 'views/dialog/message.html'});
    $routeProvider.when('/view1', {templateUrl: 'views/todoList.html', controller: 'TodoListCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'views/contactList.html', controller: 'ContactListCtrl'});
    $routeProvider.when('/main', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);

