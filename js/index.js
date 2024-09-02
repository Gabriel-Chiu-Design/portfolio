$(document).ready(function () {

    // Preloader Event
    $(".preload").addClass("active");

    setTimeout(function () {      
      $(".preload.active").removeClass("active");
      $(".wrap").addClass("active"); 
}, 3500);

    const swiper = new Swiper('.swiper', {
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
      });

});