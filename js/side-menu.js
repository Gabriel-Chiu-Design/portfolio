$(document).ready(function () {

    $(".side-menu-icon").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });

    $(".overlay").click(function (e) { 
        e.preventDefault();
        $(".side-menu").removeClass("active");
        $(".overlay").removeClass("active");
        $(".lang .inactive").removeClass("open");
    });

    $(".lang .active").click(function (e) { 
        e.preventDefault();
        $(".inactive").toggleClass("open");
        $(".overlay").toggleClass("active");
    });
});