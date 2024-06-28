$(window).on("resize", function() {
    location.reload();
});

$(window).on("load", function() {
    //navbar toggle
    $("#closeicon").on("click", function(){
        $("#closeicon").toggleClass("change");
        $("#menubar").toggleClass("visible");
    });

    //scroll and click effects
    var menubarHeight = $("#menubar").outerHeight();
    if ($(window).width() < $(window).height()) { // mobile portrait mode
        menubarHeight = 0;
    }

    var aboutMePos = $("#aboutMe").offset().top;
    var researchPos = $("#research").offset().top;
    var educationPos = $("#education").offset().top;
    var toolsPos = $("#tools").offset().top;
    var activitiesPos = $("#activities").offset().top;
    var contactPos = $("#contact").offset().top;

    $(document).on("click", "#aboutMeMenu", function() {
        $("body, html").animate({scrollTop: aboutMePos - menubarHeight}, 1000, "swing");
    });
    $(document).on("click", "#researchMenu", function() {
        $("body, html").animate({scrollTop: researchPos - menubarHeight}, 1000, "swing");
    });
    $(document).on("click", "#educationMenu", function() {
        $("body, html").animate({scrollTop: educationPos - menubarHeight}, 1000, "swing");
    });
    $(document).on("click", "#toolsMenu", function() {
        $("body, html").animate({scrollTop: toolsPos - menubarHeight}, 1000, "swing");
    });
    $(document).on("click", "#activitiesMenu", function() {
        $("body, html").animate({scrollTop: activitiesPos - menubarHeight}, 1000, "swing");
    });
    $(document).on("click", "#contactMenu", function() {
        $("body, html").animate({scrollTop: contactPos - menubarHeight}, 1000, "swing");
    });

    // microTDE gif modal
    $(".gifbutton").on("click", function() {
        var gifSrc = $(this).data("gif");
        $("#gifdisplay").attr("src", gifSrc);
        $("#gifmodal").css('display', 'flex');
    });

    $("#close").on("click", function() {
        $("#gifmodal").hide();
    });

    $(window).on("click", function(event) {
        if ($(event.target).is("#gifmodal")) {
            $("#gifmodal").hide();
        }
    });
});
