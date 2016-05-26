'use strict';

angular.module('100Haikus100DaysApp', ['100Haikus100DaysApp.auth', '100Haikus100DaysApp.admin',
    '100Haikus100DaysApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'validation.match', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
