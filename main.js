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

    // microTDE animation options
    var params = { mbh: "10.0", ms: "1.0", Hc: "0.70", b: "1.00" };
    function adjustOptions() {
        if (params.ms == "0.5") {
            // $("[data-param='Hc'] [data-value='0.34']").hide();
            // $("[data-param='Hc'] [data-value='0.00']").hide();
            $("[data-param='Hc'] [data-value='0.34']").addClass("inactive");
            $("[data-param='Hc'] [data-value='0.00']").addClass("inactive");
            if (params.Hc == "0.34" || params.Hc == "0.00") {
                params.Hc = "0.70";
                $("[data-param='Hc'] [data-value='0.70']").addClass("active");
                $("[data-param='Hc'] [data-value='0.34']").removeClass("active");
                $("[data-param='Hc'] [data-value='0.00']").removeClass("active");
            }
        } else {
            $("[data-param='Hc'] [data-value='0.34']").removeClass("inactive");
            $("[data-param='Hc'] [data-value='0.00']").removeClass("inactive");
            // $("[data-param='Hc'] [data-value='0.34']").show();
            // $("[data-param='Hc'] [data-value='0.00']").show();
        }
        if (params.Hc == "0.34" || params.Hc == "0.00") {
            // $("[data-param='ms'] [data-value='0.5']").hide();
            $("[data-param='ms'] [data-value='0.5']").addClass("inactive");
            if (params.ms == "0.5") {
                params.ms = "1.0";
                $("[data-param='ms'] [data-value='1.0']").addClass("active");
                $("[data-param='ms'] [data-value='0.5']").removeClass("active");
            }
        } else {
            // $("[data-param='ms'] [data-value='0.5']").show();
            $("[data-param='ms'] [data-value='0.5']").removeClass("inactive");
        }
    }
    $(".TDEoption").on("click", function() {
        if (!$(this).hasClass("inactive")) {
            param = $(this).closest(".TDEparam").data("param");
            value = $(this).data("value");
            params[param] = value;
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $("#TDEvideo").attr("src", "microTDE_mp4/snapshots_mbh_"+params.mbh+"_mstar_"+params.ms+"_b_"+params.b+"_Nres_500000_H_"+params.Hc+".mp4");
            adjustOptions();
        }
    });
});
