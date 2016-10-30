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
  ];

  // scrollto ------------ //

  home.scrollTo = (target) =>{
    var el = $('#'+target);
    console.log(el.offset().top);
    $('html, body').animate({
        scrollTop: el.offset().top
    }, 500);
  }

  // lightbox ------------ //

  var id;

  function toggle() {
    console.log('CLICKED TOGGLE');
    $('.full-lightbox').toggleClass('hidden');
    $('#full-' + id).toggleClass('hidden');
  }

  //close element on X
  $('.close').click(function () {
    console.log('CLICKED CLOSE');
    toggle();
  });

  //close element on click off-image
  // $('.full').click(function(){
  //   toggle();
  // });

  //open full image using captured id
  $('.image').click(function (event) {
    console.log('CLICKED IMAGE'+event.target.id);
    id = event.target.id;
    toggle();
  });

  //specific to device
  // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  // console.log(screen.width);
  //   if (screen.width < 600) {
  //     console.log('small');
  //     var d = document.getElementById('siteHome');
  //     d.className += ' mobile';

  //   }

  // --------------- end-lightbox //

  // init Isotope
  let grid = document.querySelector('.grid');

  let msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 10,
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
