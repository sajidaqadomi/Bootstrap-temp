$(function() {
    // Adjust Slider Height
    var winH = $(window).height();
    var upperH = $(".header").innerHeight();
    $(".slider,.carousel-item,.overlay").height(winH - upperH);

    //Featured Work Shuffle

    $(".featured-list .list-item").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");

        if ($(window).width() <= 767.98) {
            if ($(this).data("class") === "all") {
                $(".featured-imgs .col-sm ").css("opacity", "1");
                $(".featured-imgs .col-sm ").show();
            } else {
                $(".featured-imgs .col-sm").hide();
                $($(this).data("class")).show();
                $(".featured-imgs .col-sm ").css("opacity", "1");
            }
            // is mobile device
        }

        if ($(window).width() > 767.98) {
            if ($(this).data("class") === "all") {
                $(".featured-imgs .col-sm ").show();
                $(".featured-imgs .col-sm ").css("opacity", "1");
            } else {
                $(".featured-imgs .col-sm").css("opacity", ".2");

                $($(this).data("class")).css("opacity", "1");
                $(".featured-imgs .col-sm ").show();
            }
        }
    });

    //end click event
});

$(window).on("resize", function() {
    var win = $(this); //this = window

    if (win.width() <= 767.98) {
        $(".featured-imgs .col-sm").each(function() {
            //if statement here
            // use $(this) to reference the current div in the loop
            //you can try something like...

            if ($(this).css("opacity") == 0.2) {
                console.log("opacity hide");
                $(this).hide();
                console.log("opacity hide2");
            } else {
                console.log("opacity show");
                $(this).show();
            }
        });
    }

    if (win.width() > 767.98) {
        $(".featured-imgs .col-sm").each(function() {
            if ($(this).is(":hidden")) {
                console.log("hide");
                $(this).css("opacity", ".2");
                $(this).show();
            } else {
                $(this).css("opacity", "1");
            }
        });
    }
});