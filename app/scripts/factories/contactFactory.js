'use strict';


angular.module('AngularJsFunWithUIApp')
.factory('contactFactory',function(){

  return function(name,phone,email,extScope) {
    var localScope = extScope || { radioModel:'all' }
    var contactTemplate = {
      _name: name || 'Not Setted',
      _phone: phone || '',
      _email: email || '',

    };
    Object.defineProperties(contactTemplate,{
      all: {
        get: function(){ return this._name; }
      },
      name: {
        get: function(){
          return this._name; },
        set: function(value){ this._name = value; }
      },
      phone: {
        get: function(){ return this._phone; },
        set: function(value){ this._phone = value; }
      },
      email: {
        get: function(){ return this._email; },
        set: function(value){ this._email = value; }
      },
      typeahead: {
          get: function(){
            return this[localScope.radioModel];
          }
        }
    });
    return contactTemplate;
  };
})
.value('version', 'v.  0.3-Angular-UI');
