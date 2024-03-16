$(document).ready(function () {

    //backtotop-auto-scroll
      $(".backtotop").click(function (e) { 
        e.preventDefault();
        var target=$(this).attr('href');
        var targetPos=$(target).offset().top;
        console.log(target, targetPos);
        $("html, body").stop().animate({scrollTop: targetPos-200}, 500);
    });

});