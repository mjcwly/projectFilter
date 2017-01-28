(function() {
  angular.module('dataPortalApp')
    .config(DataPortalRouter);

  DataPortalRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function DataPortalRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '/views/_index.html'
      })
      .state('additive', {
        url: '/additive',
        templateUrl: '/views/_additive.html'
      })
      .state('subtractive', {
        url: '/subtractive',
        templateUrl: '/views/_subtractive.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }//end DataPortalRouter

})();
