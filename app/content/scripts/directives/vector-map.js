'use strict';

/**
 * @ngdoc directive
 * @name appsworld.directive:vectorMap
 * @description
 * # vectorMap
 */
angular.module('appsworld')
  .directive('vectorMap', function () {
    return {
      restrict: 'AE',
      scope: {
        options: '='
      },
      link: function postLink(scope, element) {
        var options = scope.options;
        element.vectorMap(options);
      }
    };
  });
