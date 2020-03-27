$(function() {
    // 「#login-show」要素に対するclickイベントを作成してください
    $('#modal-show').click(function(){
      $('#modal').fadeIn();
    });

    $('.close-modal').click(function(){
        $('#modal').fadeOut();
        $('#privacy-modal').fadeOut();
      });
    
  });

$('.text').click(function() {
    $('.text').removeClass('text-active');
    $(this).addClass('text-active');
});


$('a').click(function(){
var id = $(this).attr('href');
var position = $(id).offset().top;
$('html, body').animate({
    'scrollTop': position
}, 500);
});

jQuery(window).on("scroll", function($) {        
if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
} else {
    jQuery('.floating').hide();
}
});

jQuery('.floating').click(function () {
jQuery('body,html').animate({
    scrollTop: 0
}, 500);
return false;
});

$('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('img').attr('src', 'images/plus.svg');
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('img').attr('src', 'images/minus.svg');
    }
  });

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
})
