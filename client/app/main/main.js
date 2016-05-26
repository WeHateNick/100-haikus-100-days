'use strict';

angular.module('100Haikus100DaysApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>'
    });
  });
