function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('masonry', {
    url: '/masonry',
    controller: 'MasonryDemoCtrl as home',
    templateUrl: 'masonry.html'
  });

  $urlRouterProvider.otherwise('/');


}

export default OnConfig;
