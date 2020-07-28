//Каталог на главной
$(function() {
    $(".sorting__item").click(function() {
        $(".sorting__item").removeClass("active");         
        $(this).toggleClass("active");
    })
});

//Диапазон цен на главной
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 5000, 20000 ],
      slide: function( event, ui ) {
        $( "#amount_1" ).val( ui.values[ 0 ] );
        $( "#amount_2" ).val( ui.values[ 1 ] );
      }
    });
    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_2" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  } );

// Бургер на мобильных телефонах
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});

//Слайдер в АССОРТИМЕНТЕ

$(document).ready(function(){
    $('.slider').slick({
            arrows:false,
            dots:false,
            slidesToShow:3,
    });
});

//Фильтры для телефонов

$(document).ready(function() {
    $('.range__filter').click(function(event) {
        $('.range__filter-img, .range__filtration-m').toggleClass('active');
    });
});
  