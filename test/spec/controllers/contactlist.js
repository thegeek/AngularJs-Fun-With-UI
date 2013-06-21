'use strict';

describe('Controller: ContactlistCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsFunWithUIApp'));

  var ContactlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactlistCtrl = $controller('ContactlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
