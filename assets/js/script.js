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

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(333);
        $(".popup."+name_pop+" .popup__inner").fadeIn(333);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('333');
        $(".popup__inner").fadeOut(333);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

  /*===========Filter-version=======*/
    $('select[name="type_filters"]').change(function() {
      $('.filters-version').hide();
      $('.filters-version.'+$(this).val()).show();
    });
  /*===========/filter-version=======*/

  /*======Filters-selectcheck=============*/
  $(".filters-selectcheck__select").on("click", function() {
    $(this).parent().toggleClass('drop');
    $(this).next().slideToggle(333);
  });
  /*==========/filters-selectcheck=========*/

  /*===========Filters-variant=======*/
    $('input[name="action-radio"]').change(function() {
      $('.filters-variant').hide();
      $('.filters-variant.'+$(this).val()).show();
    });
  /*===========/filters-variant=======*/

  /*======Sorting-select=============*/
  $(".sorting-select").on("click", function(event) {
    event.preventDefault();
    $(this).find('.sorting-select__dropdown').slideToggle(222);
    $(this).find('.sorting-select__select').toggleClass('active');
  });


  $(".sorting-select__option").on("click", function(event) {
    event.preventDefault();
    $('.sorting-select__select').html($(this).html());
    $(this).addClass('selected');
    $(".sorting-select__option").not(this).removeClass('selected');
  });
  /*==========/sorting-select=========*/

  /*======Estimation=============*/
  $(".estimation-btn").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });
  /*==========/estimation=========*/

  /*======Btn-contact=============*/
  $(".btn-contact-show").on("click", function(event) {
    event.preventDefault();
    $(this).hide();
    $(this).next().addClass('show');
  });
  /*==========/btn-contact=========*/

  /*======Poll=============*/
  $(".poll__card.clickable").on("click", function() {
    $(this).addClass('checked');
    $(".poll__card").removeClass('clickable');
    $(".poll__result").addClass('show');
  });
  /*==========/poll=========*/

  /*======Search=============*/
  $(".search-show").on("click", function() {
    $(".search").addClass('show');
  });

  $(".search__close").on("click", function() {
    $(".search").removeClass('show');
  });
  /*==========/search=========*/


/*===========Fixed-search======*/
  let search = $("#search");
  let searchH = $("#search").innerHeight();
  let scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if( scrollOffset >= searchH + 50 ) {
      search.addClass("fixed");
    } else {
      search.removeClass("fixed");
    }
  }
/*===========/fixed-search======*/

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

  $('.watched .product-watched .product__inner').slick({
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
var scrollPos = 0;
$(window).scroll(function() {
 
  var st = $(this).scrollTop();
  if (st > scrollPos){
    $(".header.show .nav").slideUp();
    $(".burger").removeClass('active');
    $(".header").removeClass('show');
  } else {
    $(".header").addClass('show');
  }
  scrollPos = st;
});
/*=========/scrollpage (header show)=====*/

/*===========Range=============*/
    $( "#slider-range_price" ).slider({
      range: true,
      min: 10000,
      max: 100000,
      values: [ 30000, 70000 ],
      slide: function( event, ui ) {
        $('#range_1').val(ui.values[ 0 ]);
        $('#range_2').val(ui.values[ 1 ]);
 
      }
    });


    $( "#slider-range_value_center" ).slider({
      range:'min',
      min: 0,
      max: 120,
      value: 20,
      create: function() {
        $('#slider-range_value_center .ui-slider-handle').html('<span>'+$( this ).slider( "value" )+'</span>');

     
      },
      slide: function( event, ui ) {
        $('#slider-range_value_center .ui-slider-handle').html('<span>'+ui.value+'</span>');
      }
    });
    
    $( "#slider-range_distance").slider({
      range: true,
      min: 0,
      max: 120,
      values: [ 0, 30 ],
      create: function(event, ui) {

       values = $( this ).slider( "values" );

    
        $("#slider-range_distance .ui-slider-handle").html('<span>'+values[0]+'</span>');
        $("#slider-range_distance .ui-slider-handle:last-child").html('<span>'+values[1]+'</span>');
 
     
      },
      slide: function( event, ui ) {
        $(ui.handle).html('<span>'+ui.value+'</span>');
      }
    });


 
  /*===========range=============*/