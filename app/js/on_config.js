function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'siteHome.html'
  })
  .state('masonry', {
    url: '/masonry',
    controller: 'MasonryDemoCtrl as mason',
    templateUrl: 'masonry.html'
  });

  $urlRouterProvider.otherwise('/');


}

export default OnConfig;
