$(document).ready(function(){



// Trigger WoW.js
new WOW().init();
/************* */


// ********************************** Start Header **********************************
// Adjust header Height 
$(".header").css("height",$(window).height());
$(window).resize(function(){
  $(".header").css("height",$(window).height());
})
/************* */

// navbar-changing
$(window).scroll(function(){
  if($(window).scrollTop() > 10) {
    $(".header .navbar").css("background","#FFF");
    $(".header .navbar .navbar-brand").css("color","#007bff");
    $(".header .navbar .container .navbar-collapse .navbar-nav .nav-item .nav-link").css("color","#000");
    $(".header .navbar .navbar-toggler").css('color','#000');
  } else {
    $(".header .navbar").css("background","transparent");
    $(".header .navbar .navbar-brand").css("color","#fff");
    $(".header .navbar .container .navbar-collapse .navbar-nav .nav-item .nav-link").css("color","#ffffffb3");
    $(".header .navbar .navbar-toggler").css('color','#FFF');
  }

  if ($(window).scrollTop() > 10) {
    $(".header .navbar").css("height","70px");
  } else {
    $(".header .navbar").css("height","102px");
  }
});
/************* */

// click navbar-main-items
$(".header .navbar .navbar-nav .nav-item").click(function(e){
  e.preventDefault();
  $(this).addClass('active').siblings().removeClass('active');
  $('html , body').animate({
    scrollTop: $("#" + $(this).data('scroll')).offset().top - 70
  },700)
});
/************* */

// click navbar-sub-items
$(".header .navbar .navbar-nav .nav-item .my-down-menu").click(function(e){
  e.stopPropagation();
});
$(".header .navbar .navbar-nav .nav-item .my-down-menu a").click(function(e){
  e.preventDefault();
  $('html , body').animate({
    scrollTop: $("#" + $(this).data('scroll')).offset().top - 70
  },700)
});
/************* */

// navbar animation
$('.header .navbar .container .navbar-toggler').click(function(event){
  event.stopPropagation();
  $('.header .navbar .container .navbar-collapse').animate({
    right: '0'
  },500);
});

$('.header .navbar .container .navbar-collapse').click(function(event){
  event.stopPropagation();
});

$('.header .navbar .container .navbar-collapse .close-nav').click(function(){
  $('.header .navbar .container .navbar-collapse').animate({
    right: - $('.navbar-collapse').innerWidth()
  },500);
});

$('.header .navbar .container .navbar-collapse').css('right',- $('.navbar-collapse').innerWidth());

$('body').click(function(){
  $('.header .navbar .container .navbar-collapse').animate({
    right: - $('.navbar-collapse').innerWidth()
  },500);
});
/************* */

// navbar stuff
if($(document).width() > 992) {
  $('.my-down').hover(function(){
    $('.my-down .my-down-menu').slideDown(300);
  },function(){
    $('.my-down .my-down-menu').slideUp(300);
  });
} else {
  $('.my-down .my-down-a').click(function(e){
    $('.my-down .my-down-menu').slideToggle(300);
    //********** 
    $('.my-down .my-down-a i').toggleClass('active');
    if($('.my-down .my-down-a i').hasClass('active')) {
      $('.my-down .my-down-a i').css("transform", 'rotateZ(' + 180 + 'deg' + ')');
    } else {
      $('.my-down .my-down-a i').css("transform", 'rotateZ(' + 0 + 'deg' + ')');
    }
    //**********
  }); 
}

$('body').click(function(){
  $('.my-down .my-down-menu').slideUp(300);
  // ********/
  $('.my-down .my-down-a i').toggleClass('active');
  if($('.my-down .my-down-a i').hasClass('active')) {
    $('.my-down .my-down-a i').css("transform", 'rotateZ(' + 180 + 'deg' + ')');
  } else {
    $('.my-down .my-down-a i').css("transform", 'rotateZ(' + 0 + 'deg' + ')');
  }
  /******** */
});
/************* */

// sync Element 
$(window).scroll(function(){
  $('.block').each(function(){
    if ($(window).scrollTop() > $(this).offset().top - 100) {
      $('.header .navbar .navbar-nav .nav-item').removeClass('active');
      var blockID = $(this).attr('id');
      $('.header .navbar .navbar-nav .nav-item[data-scroll="' + blockID + '"]').addClass('active');
    }
  });
});
/************* */

// scroll to about-us
$('.scroll-down').click(function(){
  $('html,body').animate({
    scrollTop: $('#about-us').offset().top - 70
  },700);
});
/************* */

// scroll to contact-us
$('.get-in-touch').click(function(){
  $('html,body').animate({
    scrollTop: $('#contact').offset().top - 70
  },700);
});
/************* */

// my-down-in-stuff
if($(document).width() > 992) {
  $('.my-down-in').hover(function(){
    $('.my-down-in .my-down-menu-in').css('right',  - ( $('.my-down-menu').width()) );
    $('.my-down-in .my-down-menu-in').slideDown(300);
  },function(){
    $('.my-down-in .my-down-menu-in').slideUp(300);
  });
} else {
  $('.my-down-in').click(function(e){
    $('.my-down-in .my-down-menu-in').slideToggle(300);
    
    // *************
    $('.my-down-in i').toggleClass('active');
    if($('.my-down-in i').hasClass('active')) {
      $('.my-down-in i').css("transform", 'rotateZ(' + 180 + 'deg' + ')');
    } else {
      $('.my-down-in i').css("transform", 'rotateZ(' + 0 + 'deg' + ')');
    }
    // ***************
  }); 
}
$('.my-down-in .my-down-menu-in').css('right',  - ( $('.my-down-menu').width()) );
/************* */

// ********************************** End Header **********************************


// ********************************** Start our featuers **********************************

// Trigger owlCarousel
$(".owl-carousel.images").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1200,
});

$(".owl-carousel.info").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1200
});
/************* */

// navigator buttons
$('.our-featuers .fa-chevron-right').click(function(){
  $('.our-featuers .owl-carousel .owl-nav .owl-prev').click();
});
$('.our-featuers .fa-chevron-left').click(function(){
  $('.our-featuers .owl-carousel .owl-nav .owl-next').click();
});
/************* */

// ********************************** End our featuers **********************************

// ********************************** Start our team **********************************

// toggle Social div
$('.our-team .image-social').hover(function(){
  $(this).find('.social').animate({
    left: '0'
  },200)
},function(){
  $(this).find('.social').animate({
    left: '-51'
  },200)
});
/************* */

// ********************************** End our team **********************************


// ********************************** Start portfolio*********************************

// Trigger mixitup
mixitup($('.mixCount'));
/************* */

// shuffle active button
$('.portfolio .filter-container button').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
/************* */

// overlay fadeIn on hover 
$('.portfolio .item').hover(function(){
  $(this).find('.overlay').fadeIn(300);
},function(){
  $(this).find('.overlay').fadeOut(300);
});


// ********************************** End portfolio************************************


// ********************************** Start testimonials************************************
$(".owl-carousel.testimonial").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 450,
});
// ********************************** End testimonials************************************



$("footer .footer-nav-item").click(function(e){
  e.preventDefault();
  $('html , body').animate({
    scrollTop: $("#" + $(this).data('scroll')).offset().top - 70
  },700)
});






$('.spn').click(function(){
  $('.hhh').css({
    transform: 'rotateZ(' + 270 + 'deg' + ')',
  });
  console.log('omar');
});













});

