$(document).ready(function() {

  /*======Nav (dropdown)=============*/
  $(".burger").on("click", function() {
    $(this).toggleClass('active');
    $(".nav").slideToggle(333);
  });
  /*==========/nav (dropdown)=========*/

  /*======Card-roll (dropdown)=============*/
  $(".card-roll .title-small").on("click", function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(333);
  });
  /*==========/card-roll (dropdown)=========*/

  /*======Favorite=============*/
  $(".favorite").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });
  /*==========/favorite=========*/

  /*=================Sliders==========================*/
  /*===========Slider-product============*/
  $('.buy .product-new .product__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
     {
       breakpoint: 1230,
        settings: {
            infinite: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
      },
    ]
  });

  $('.buy .product-secondary .product__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
     {
       breakpoint: 1230,
        settings: {
            infinite: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
      },
    ]
  });

  $('.rent .product-new .product__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
     {
       breakpoint: 1230,
        settings: {
            infinite: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
      },
    ]
  });

  $('.rent .product-secondary .product__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
     {
       breakpoint: 1230,
        settings: {
            infinite: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        }
      },
    ]
  });
  /*===========/slider-product============*/

  /*=========/sliders==========*/

});


/*=========Scrollpage (header show)=====*/
$(document).on('wheel', function(e){

  if (e.originalEvent.wheelDelta >= 0) {

    $(".header").addClass('show');

  } else {

      $(".header.show .nav").slideUp();
      $(".burger").removeClass('active');
      $(".header").removeClass('show');
  }
});

var last;

$(document).bind('touchmove', function(e){

   var current = e.originalEvent.touches[0].clientY;

   if(current > last){

     $(".header").addClass('show');

   } else if(current < last){

      $(".header.show .nav").slideUp();
      $(".burger").removeClass('active');
      $(".header").removeClass('show');

   }

   last = current;

});
/*=========/scrollpage (header show)=====*/