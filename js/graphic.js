$(document).ready(function () {
    //filter-function
    $(".filter").click(function (e) {

        //filter-button on/off function
        $(this).addClass("active").siblings().removeClass("active");
        
        //gallery content display toggle function
        var category = $(this).attr("id");

        if(category == "all"){
            $(".gallery-item").removeClass("active");
            setTimeout(function(){
                $(".gallery-item").addClass("active")
            }, 500);
            $(".clear").removeClass("active");
        }
        else{
            $(".gallery-item").removeClass("active")
            setTimeout(function(){
                $("."+ category).addClass("active")
            }, 500);
            $(".clear").addClass("active");
        }
    });

    //Clear-filter function
    $(".clear").click(function (e) { 
        e.preventDefault();
        //show all gallery items
        $(".gallery-item").addClass("active");

        //hide clear filter button
        $(this).removeClass("active");

        //turn off all filter
        $(".filter").removeClass("active");
        
        //turn on "All" filter
        $("#all").addClass("active");
    });

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //     document.querySelector(".header").style.top = "0";
    //     } else {
    //         document.querySelector(".header").style.top = "-106px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }
});