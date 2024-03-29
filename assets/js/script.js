function tabsClients(n)
{
  $('.clients .tabs-nav a').removeClass('active');
  $('.clients .tabs-nav a.t'+n).addClass('active');
  $('.clients .tabs-block').fadeOut(0);
  $('.clients .tabs-block.tab_'+n).fadeIn(222);
};

function refresh_number()
{
  $( ".calc-copy" ).each(function( index ) {
    $( this ).find('.title-small span.n-pos').html(index+1) ;
  });
}


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

  $(".sorting-save").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });
  /*==========/favorite=========*/

   /*======Balloon=============*/
  $(".search-balloon").on("click", function() {
    $(this).toggleClass('active');
    $(".search-balloon").not(this).removeClass('active');
  });
  /*==========/balloon=========*/

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(333);
        $(".popup").not(".popup."+name_pop).fadeOut(333);
        $(".popup."+name_pop+" .popup__inner").fadeIn(333);
        $(".popup__inner").not(".popup."+name_pop+" .popup__inner").fadeOut(333);
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
    $(".filters-selectcheck__select").not(this).parent().removeClass('drop');
    $(".filters-selectcheck__select").not(this).next().slideUp(333);
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

  /*======Info (accordeon)=============*/
  $(".info__title").on("click", function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  /*==========/info (accordeon)=========*/

  /*======Comments=============*/
  $(".comments__btn-all").on("click", function(event) {
    event.preventDefault();
    $(this).prev().slideToggle();
    $(this).find('.comments__btn-all__show').toggleClass('hide');
    $(this).find(".comments__btn-all__hide").toggleClass('show');
  });
  /*==========/comments=========*/

  /*======Compare-menu=============*/
  $(".compare-menu__icon").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  /*==========/compare-menu=========*/

  /*======Drop-menu=============*/
  $(".drop-menu__btn").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  /*==========/drop-menu=========*/

  /*======Product-menu=============*/
  $(".product-menu__btn").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  /*==========/product-menu=========*/

  /*======Calc-early-add=============*/
  $('body').on( "click", ".calc-early__close", function(event) {
    event.preventDefault();
   
    total_calc = parseInt($('#calc-box-insert').attr('attr-now-calc'));
    $('#calc-box-insert').attr('attr-now-calc', total_calc-1)
    
    if(total_calc != 1)
    {
      b = $(this)
      b.parent().parent().slideUp(333)
      setTimeout(function() {
        b.parent().parent().remove();
        refresh_number();
      }, 333);

      
    }
    else
    {
      $('#calc-box-insert').slideUp(333);
      refresh_number();
    }
});  

  $(".calc-early-add").on("click", function(event) {
    event.preventDefault();
    total_calc = parseInt($('#calc-box-insert').attr('attr-now-calc'));
    $('#calc-box-insert').slideDown(333);
    if(total_calc != 0)
    {
      data = $(".calc-copy").html();
      id_calc = total_calc+1
      $('#calc-box-insert').append('<div style="display:none;" class="calc-copy c_'+id_calc+'">'+data+'</div>');
 
      
      $('.c_'+id_calc).slideDown(333)
      refresh_number();
    }
    total_calc = $('#calc-box-insert').attr('attr-now-calc', total_calc+1)
    refresh_number();
  });
  /*==========/calc-early-add=========*/

  /*======View-change=============*/
  $(".view-change").hover(function() {
    $(".view-change__desc").fadeToggle();
  });
  /*==========/view-change=========*/

  /*=======Compare__content (number)======*/
  $('.compare__content').removeClass('one').addClass(function(){
    return ["none", "one", "two", "three", "four"]
       [$(this).children('.compare__col').length];
  });
/*=======/compare__content (number)======*/

/*======Form-selectcheck=============*/
  $(".form-selectcheck__select").on("click", function() {
    $(this).parent().toggleClass('drop');
    $(this).next().slideToggle(333);
    $(".form-selectcheck__select").not(this).parent().removeClass('drop');
    $(".form-selectcheck__select").not(this).next().slideUp(333);
  });
  /*==========/form-selectcheck=========*/


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

/*======Selectbox=============*/
  $(".selectbox").on("click", function(event) {
    event.preventDefault();
    $(this).find('.selectbox__dropdown').slideToggle(222);
    $(this).find('.selectbox__select').toggleClass('active');
  });


  $(".selectbox__option").on("click", function(event) {
    event.preventDefault();
    $('.selectbox__select').html($(this).html());
    $(this).addClass('selected');
    $(".selectbox__option").not(this).removeClass('selected');
  });
  /*==========/selectbox=========*/

  /*=========Textarea-qt==========*/
  $('.form-textarea textarea').bind('input', function() {
    $(this).parent().find('.form-textarea-result').html($(this).val().length);
  });
  /*=========/textarea-qt==========*/

  /*======Ads-block=============*/
  $(".ads-block__header").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
  /*==========/ads-block=========*/

  /*======chat-attach=============*/
   $(".chat-attach").on("click", function(event) {
    event.preventDefault();
    $('.attach-box').slideToggle();
  });

   $(".attach-box__close").on("click", function(event) {
    event.preventDefault();
    $('.attach-box').slideUp();
  });
  /*==========/chat-attach=========*/

  /*======attach-check=============*/
  $(".attach-box__photo").on("click", function(event) {
    event.preventDefault();
    $(this).find('.attach-check').toggleClass('checked');
  });
  /*==========/attach-check=========*/

  /*======Chat-list=============*/
  $(".chat-list__item").on("click", function(event) {
    event.preventDefault();
    $(this).addClass('active');
    $(".chat-list__item").not(this).removeClass('active');
    $('.chat-screen').hide();
    $('.chat-screen.'+$(this).attr('data-chat')).fadeIn(222);
  });
  /*==========/chat-list=========*/

  /*======chat-screen-person=============*/
  $(".chat__about").on("click", function() {
    $(".chat-screen-person").fadeIn();
  });

  $(".chat-screen-person .chat-back").on("click", function() {
    $(".chat-screen-person").fadeOut();
  });

  $(".chat-back.mobile").on("click", function() {
    $(".chat-screen").fadeOut();
  });
  /*==========/chat-screen-person=========*/

  /*======sell-nav=============*/
  $(".sell-nav").on("click", function() {
    if($(window).width() < 547)
      {
        $(this).find('.sell-nav__dropdown').slideToggle(222);
      }
    $(this).find('.sell-nav__select').toggleClass('active');
  });


  $(".sell-nav__option").on("click", function() {
    $('.sell-nav__select').html($(this).html());
    $(this).addClass('selected');
    $(".sell-nav__option").not(this).removeClass('selected');
  });
  /*==========/sell-nav=========*/

  /*======Sell-check=============*/
  $(".sell-check").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('checked');
    $(".sell-photo_photo .sell-check").not(this).removeClass('checked');
  });
  /*==========/sell-check=========*/

  /*======sell-btn=============*/
  $(".sell-btn").on("click", function(event) {
    event.preventDefault();
    $('.sell-photo.'+$(this).attr('data-sell')).fadeToggle(222);
  });
  /*==========/sell-btn=========*/

  /*======Sell-view-check=============*/
  $(".sell-view-check").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('checked');
    $(".sell-view-check").parent().toggleClass('checked');
    $(".sell-view-check").not(this).removeClass('checked');
    $(".sell-view-check").not(this).parent().removeClass('checked');
    $(".sell-view__result").slideDown();
  });

  $(".sell-view-check").not(".sell-view_package .sell-view-check").on("click", function(event) {
    event.preventDefault();
    if($(window).width() <= 992)
      {
        $(".bg-popup").fadeIn();
        $('body').addClass("hidden");
      };
  });

  
  $(".sell-view_marker .sell-view-check").on("click", function(event) {
    event.preventDefault();
    $(".package").hide();
    $(".product-card").toggleClass('marker');
    $(".product-card").removeClass('top');
    $(".product-card").removeClass('illumination');
    $(".filters-infobox.marker").show();
    $(".filters-infobox").not(".filters-infobox.marker").hide();
  });


  $(".sell-view_illumination .sell-view-check").on("click", function(event) {
    event.preventDefault();
    $(".package").hide();
    $(".product-card").toggleClass('illumination');
    $(".product-card").removeClass('marker');
    $(".product-card").removeClass('top');
    $(".filters-infobox.illumination").show();
    $(".filters-infobox").not(".filters-infobox.illumination").hide();
  });

  $(".sell-view_top .sell-view-check").on("click", function(event) {
    event.preventDefault();
    $(".product-card").toggleClass('top');
    $(".product-card").removeClass('illumination');
    $(".product-card").removeClass('marker');
    $(".package").hide();
    $(".filters-infobox.top").show();
    $(".filters-infobox").not(".filters-infobox.top").hide();
  });

  $(".sell-view_free .sell-view-check").on("click", function(event) {
    event.preventDefault();
    $(".product-card").removeClass('top');
    $(".product-card").removeClass('illumination');
    $(".product-card").removeClass('marker');
    $(".package").hide();
    $(".filters-infobox").hide();
  });

  $(".sell-view_package .sell-view-check").on("click", function(event) {
    event.preventDefault();
    $(".sell-view__result").hide();
    $(".package").slideToggle();
  });

  $(".sell-view_show").on("click", function(event) {
    event.preventDefault();
    $(".sell-view__result").slideToggle();
  });

  $(".sell-view__result-close, .bg-popup, .sell-view__result-btn").on("click", function(event) {
    event.preventDefault();
    $(".sell-view__result").slideUp();
    if($(window).width() <= 992)
      {
        $(".bg-popup").fadeOut();
        $('body').removeClass("hidden");
      };
  });
  /*==========/sell-check=========*/

  /*======Selectcheckbox=============*/
  $(".selectcheckbox").on("click", function(event) {
    event.preventDefault();
      $(this).find('.selectcheckbox__dropdown').slideToggle(222);
      $(this).find('.selectcheckbox__select').toggleClass('active');
  });


  $(".selectcheckbox__option").on("click", function(event) {
    event.preventDefault();
    $(this).parent().parent().parent().find('.selectcheckbox__select').html($(this).html());
    $(this).addClass('selected');
    $(".selectcheckbox__option").not(this).removeClass('selected');
  });
  /*==========/selectcheckbox=========*/

  /*=====Add-file=======*/
  var dropZone = $('.add-container');

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
     return false;
  });

  dropZone.on('dragover dragenter', function() {
     $(this).addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     dropZone.removeClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
  });

  dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
  });

  $('.file-input').change(function() {
     let files = this.files;
     sendFiles(files);
  });

  function sendFiles(files) {
     let maxFileSize = 5242880;
     let Data = new FormData();
     $(files).each(function(index, file) {
          if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
               Data.append('images[]', file);
          }
     });
};
  /*=====/add-file=======*/

  /*========Offers-show========*/
  $(".offers-show").on("click", function (event) {
    event.preventDefault();
    $(this).hide();
    $(".offers-block").slideDown(); 
  });
  /*========/offers-show========*/

  /*=========Form-password========*/
  $(".form-password__icon").on("click", function() {
    $(this).toggleClass("active");
    if ($(this).hasClass('active')){
    $(this).parent().find('input').attr('type', 'text');

  } else {
    $(this).parent().find('input').attr('type', 'password');
  }  
  });
  /*=========/form-password========*/

  /*=========Disclose========*/
  $(".product-card__disclose").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().parent().find('.product-card-complex').slideToggle();  
  });
  /*=========/disclose========*/

  /*=========About-block__video========*/
  $(".about-block__video").on("click", function() {
    $(".about-block__icon").fadeToggle(111);
  });
  /*=========/about-block__video========*/

  /*=========About-block__text========*/
  $(".about-block__more").on("click", function(event) {
    event.preventDefault();
    $(".about-block__text-more").slideToggle();
  });
  /*=========/about-block__text========*/

   /*=========Housing-list========*/
  $(".housing-list__header").on("click", function() {
    $(this).next().slideToggle();
    $(this).find(".housing-list__qt").toggleClass('active');
  });
  /*=========/housing-list========*/


/*===============Popup-photo=================*/
    $(".open-popup-photo").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(333);
        $(".popup."+name_pop+" .popup__inner").fadeIn(333);
        $('body').addClass("hidden");

        /*===photo-slider===*/
        $('.photo-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $('.photo-slider__pagin').html(i + '/' + slick.slideCount);
        });

        $('.photo-slider').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          vertical: true,
          verticalSwiping: true,
        });
        /*===/photo-slider===*/

    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('333');
        $(".popup__inner").fadeOut(333);
        $('body').removeClass("hidden");

        $('.photo-slider').slick('unslick');
    });
  /*==============/popup=================*/

  /*=================Sliders==========================*/
  $('.intro-housing__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.intro-housing__qt').html(i + '/' + slick.slideCount);
  });

  $('.intro-housing__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.intro-housing__arrow_prev'),
    nextArrow: $('.intro-housing__arrow_next'),
  });
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

  $('.watched .product-watched_2 .product__inner').slick({
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

  $('.watched .product-other .product__inner').slick({
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

  $('.watched .product-similar .product__inner').slick({
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

 
  /*==================Slider-nav==========*/
  $('.product__photo .slider-for').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.product__photo .qt-pagin').html(i + '/' + slick.slideCount);
  });

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: $('.product__photo .slider-arrow_prev'),
  nextArrow: $('.product__photo .slider-arrow_next'),
  //fade: true,
  responsive: [
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
          }
        }
      ]
});

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


    $( "#slider-range_calc-price" ).slider({
      range:'min',
      min: 720000,
      max: 35000000,
      value: 5600000,
      slide: function( event, ui ) {
        $('#calc-price').val(ui.value);
 
      }
    });

    $( "#slider-range_calc-period" ).slider({
      range:'min',
      min: 1,
      max: 30,
      value: 12,
      slide: function( event, ui ) {
        $('#calc-period').val(ui.value);
 
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

  /*=========Scroll=========*/
  window.onload = function () {
          var scr = $(".compare__content");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });



     

          container_size();

      }




      function container_size()
      {
        if(document.querySelectorAll('.compare__content .compare__col').length > 2)
        {
        
          w = window.innerWidth;
          if(w > 960)
          {
            box = document.querySelector('.container');
            width = box.offsetWidth
            wp = (w-width)/2+15;
            document.querySelector('.compare__content').style.marginRight = -wp+'px';
        }
       }
      }


      window.onresize = function(event) {
         container_size();
    };


  /*=========/Scroll=========*/