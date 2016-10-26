function MasonryDemoCtrl() {

  var Masonry = require('masonry-layout');
  var imagesLoaded = require('imagesloaded');

  // init Isotope
  var grid = document.querySelector('.grid');

  var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  imagesLoaded(grid).on('progress', function () {
    // layout Masonry after each image loads
    msnry.layout();
  });

}

export default {
  name: 'MasonryDemoCtrl',
  fn: MasonryDemoCtrl
};

