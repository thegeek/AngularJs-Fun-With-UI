'use strict';

angular.module('AngularJsFunWithUIApp')
  .filter('sieve',function($filter){
    return function(items,field,sText){
        switch(field) {
          case 'all':
            return $filter('filter')(items,sText);
          case 'name':
            return $filter('filter')(items,{name:sText});
          case 'phone':
            return $filter('filter')(items,{phone:sText});
          case 'email':
            return $filter('filter')(items,{email:sText});
        }

      return items;
    };
  });
