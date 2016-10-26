function HomeCtrl() {
  'ngInject';

  const home = this;

  var Masonry = require('masonry-layout');
  var imagesLoaded = require('imagesloaded');

  home.images = [
    'ring1',
    'ring2',
    'ring3',
    'ring4',
    'ring5',
    'ring6',
    'ring7',
    'necklace1',
    'necklace2',
    'necklace3',
    'necklace4',
    'necklace5',
    'necklace6',
    'necklace7',
    'necklace8'
  ]

  // init Isotope
  let grid = document.querySelector('.grid');

  let msnry = new Masonry(grid, {
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
  name: 'HomeCtrl',
  fn: HomeCtrl
};
