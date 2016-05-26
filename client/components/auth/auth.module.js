'use strict';

angular.module('100Haikus100DaysApp.auth', ['100Haikus100DaysApp.constants',
    '100Haikus100DaysApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
