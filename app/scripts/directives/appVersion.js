'use strict';

angular.module('AngularJsFunWithUIApp')
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
