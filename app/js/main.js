// import 'jquery';
// import 'jquery-bridget';
// import 'ev-emitter';
// import 'desandro-matches-selector';
// import 'fizzy-ui-utils';
// import 'get-size';
// import 'outlayer';
// import 'masonry-layout';
// import 'imagesloaded';

import angular from 'angular';

/*
<script src="bower_components/jquery/dist/jquery.js"></script>
  <script src="bower_components/jquery-bridget/jquery-bridget.js"></script>
  <script src="bower_components/ev-emitter/ev-emitter.js"></script>
  <script src="bower_components/desandro-matches-selector/matches-selector.js"></script>
  <script src="bower_components/fizzy-ui-utils/utils.js"></script>
  <script src="bower_components/get-size/get-size.js"></script>
  <script src="bower_components/outlayer/item.js"></script>
  <script src="bower_components/outlayer/outlayer.js"></script>
  <script src="bower_components/masonry/masonry.js"></script>
  <script src="bower_components/imagesloaded/imagesloaded.js"></script>
 */

// angular modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-ui-router';
import 'angular-masonry';
//move this to service?
import 'textangular/dist/textAngular-sanitize.min';
// import 'textangular/dist/textAngular-rangy.min';
import 'textAngular';
// import 'textangular/dist/textAngular';//gives TAsetup error
import 'angularfire'; //this is needed after firebase but we can load it here first..
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';
import './components';

// create and bootstrap application
const requires = [
  'wu.masonry',
  'textAngular',
  'firebase',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives',
  'app.components'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
