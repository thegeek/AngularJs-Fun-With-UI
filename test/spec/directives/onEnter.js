'use strict';

describe('Directive: onEnter', function () {
  beforeEach(module('AngularJsFunWithUIApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<on-enter></on-enter>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the onEnter directive');
  }));
});
