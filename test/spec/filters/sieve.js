'use strict';

describe('Filter: sieve', function () {

  // load the filter's module
  beforeEach(module('AngularJsFunWithUIApp'));

  // initialize a new instance of the filter before each test
  var sieve;
  beforeEach(inject(function ($filter) {
    sieve = $filter('sieve');
  }));

  it('should return the input prefixed with "sieve filter:"', function () {
    var text = 'angularjs';
    expect(sieve(text)).toBe('sieve filter: ' + text);
  });

});
