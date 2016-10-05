function MasonryDemoCtrl(){

var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');

// var msnry = new Masonry( '.grid', {
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Isotope
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});


}

export default {
  name: 'MasonryDemoCtrl',
  fn: MasonryDemoCtrl
};

