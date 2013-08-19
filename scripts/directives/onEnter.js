'use strict';

angular.module('AngularJsFunWithUIApp')
  .directive('onEnter',[function(){
    return function(scope,elm,attrs) {
      // thaks to http://jsfiddle.net/Ba9vY/ - https://groups.google.com/forum/#!msg/angular/tv4Nl1HouOw/i0MMmfkMrbUJ
      elm.on('keydown keypress',function(){
        if(event.which === 13) {
          scope.$apply(function(){
            scope.$eval(attrs.onEnter);
          });
          event.preventDefault();
        }
      });

    };
  }]);
