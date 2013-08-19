'use strict';

angular.module('AngularJsFunWithUIApp')
  .controller('TodoListCtrl', ['$scope', '$dialog',
  function($scope, $dialog) {
    $scope.todos = [{
        desc: 'Wash Dishes',
        done: false
      }, {
        desc: 'Call John',
        done: false
      }, {
        desc: 'Pay Bills',
        done: false
      }
    ];
    $scope.toggleState = function(index) {
      var todo = $scope.todos[index];
      todo.done = !todo.done;
    };
    $scope.isDone = function(index) {

      if( index === undefined ) {
        return '';
      };

      return $scope.todos[index].done ? 'todo-done' : '';
    }
    $scope.confirmRemove = function(index) {
      var mb = $dialog.messageBox('Confirm please', 'Are you sure you want to eliminate this todo?', [{
          label: 'Yes i\'m sure!',
          result: true
        }, {
          label: 'No Cancel',
          result: false
        }
      ]);
      mb.open().then(function(result) {
        if ( !! result) {
          $scope.removeTodo(index);
        }
      });
    };
    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    }
    $scope.addTodo = function() {
      var todo = [{
          desc: $scope.newTodo,
          done: false
        }
      ]
      $scope.todos = todo.concat($scope.todos);
      $scope.newTodo = '';
    }
  }
]);
