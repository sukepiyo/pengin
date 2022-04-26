$('.nav-btn').click(function(){
  $('.bar').toggleClass('close');
  $('.header-nav').fadeToggle(500);
  $('body').toggleClass('noscroll');
});

if ($(window).width() < 768) {
  $('.nav-item').click(function(){
    $('.header-nav').fadeOut(500);
    $('.bar').removeClass('close');
    $('body').removeClass('noscroll');
  });
}