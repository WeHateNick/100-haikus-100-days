'use strict';

angular.module('100Haikus100DaysApp.admin')
  .config(function($stateProvider) {
    $stateProvider.state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin'
    });
  });
