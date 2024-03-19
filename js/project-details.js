$(document).ready(function () {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
      } else {
         document.querySelector(".header").style.top = "-106px";
      }
      prevScrollpos = currentScrollPos;
    }

    //backtotop-auto-scroll
    //   $(".backtotop").click(function (e) { 
    //     e.preventDefault();
    //     var target=$(this).attr('href');
    //     var targetPos=$(target).offset().top;
    //     console.log(target, targetPos);
    //     $("html, body").stop().animate({scrollTop: targetPos}, 500);
    // });
});