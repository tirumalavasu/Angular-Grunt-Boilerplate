'use strict';

/**
 * @ngdoc directive
 * @name appsworld.directive:wrapOwlcarousel
 * @description
 * # wrapOwlcarousel
 */
angular.module('appsworld')
  .directive('wrapOwlcarousel', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        var options = scope.$eval(angular.element(element).attr('data-options'));

        angular.element(element).owlCarousel(options);
      }
    };
  });
