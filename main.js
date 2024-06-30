$(window).on("load", function() {
    //navbar toggle
    $("#closeicon").on("click", function(){
        $("#closeicon").toggleClass("change");
        $("#menubar").toggleClass("visible");
    });

    //scroll and click effects
    $("#menubar ul li").on("click", function() {
        var section= $(this).data("section");
        var menubarHeight = $("#menubar").outerHeight();
        if ($(window).width() < $(window).height()) { // mobile portrait mode
            menubarHeight = 0;
        }
        var sectionPos = $("#"+section).offset().top;
        $("body, html").animate({scrollTop: sectionPos - menubarHeight}, 1000, "swing");
    });

    var quarterHeight = window.innerHeight/4;
    $(window).on("scroll", function() {
        var windowPos = $(window).scrollTop() + 1;
        var aboutMePos = $("#aboutMe").offset().top;
        var researchPos = $("#research").offset().top;
        var educationPos = $("#education").offset().top;
        var toolsPos = $("#tools").offset().top;
        var activitiesPos = $("#activities").offset().top;
        var contactPos = $("#contact").offset().top;
        if (windowPos >= aboutMePos - quarterHeight && windowPos < researchPos - quarterHeight) {
            $("#menubar ul li#aboutMeMenu").siblings().removeClass("activeMenu");
            $("#menubar ul li#aboutMeMenu").addClass("activeMenu");
        }
        else if (windowPos >= researchPos - quarterHeight && windowPos < educationPos - quarterHeight) {
            $("#menubar ul li#researchMenu").siblings().removeClass("activeMenu");
            $("#menubar ul li#researchMenu").addClass("activeMenu");
        }
        else if (windowPos >= educationPos - quarterHeight && windowPos < toolsPos - quarterHeight) {
            $("#menubar ul li#educationMenu").siblings().removeClass("activeMenu");
            $("#menubar ul li#educationMenu").addClass("activeMenu");
        }
        else if (windowPos >= toolsPos - quarterHeight && windowPos < activitiesPos - quarterHeight) {
            $("#menubar ul li#toolsMenu").siblings().removeClass("activeMenu");
            $("#menubar ul li#toolsMenu").addClass("activeMenu");
        }
        else if (windowPos >= activitiesPos - quarterHeight && windowPos < contactPos - quarterHeight) {
            $("#menubar ul li#activitiesMenu").siblings().removeClass("activeMenu");
            $("#menubar ul li#activitiesMenu").addClass("activeMenu");
        }
        else if (windowPos >= contactPos - quarterHeight) {
            $("#menubar ul li#contactMenu").siblings().removeClass("activeMenu");
            $("#menubar ul li#contactMenu").addClass("activeMenu");
        }
    });

    // microTDE animation options
    var params = { mbh: "10.0", ms: "1.0", Hc: "0.70", b: "1.00" };
    function adjustOptions() {
        if (params.ms == "0.5") {
            // $("[data-param='Hc'] [data-value='0.34']").hide();
            // $("[data-param='Hc'] [data-value='0.00']").hide();
            $("[data-param='Hc'] [data-value='0.34']").addClass("inactiveOption");
            $("[data-param='Hc'] [data-value='0.00']").addClass("inactiveOption");
            if (params.Hc == "0.34" || params.Hc == "0.00") {
                params.Hc = "0.70";
                $("[data-param='Hc'] [data-value='0.70']").addClass("activeOption");
                $("[data-param='Hc'] [data-value='0.34']").removeClass("activeOption");
                $("[data-param='Hc'] [data-value='0.00']").removeClass("activeOption");
            }
        } else {
            $("[data-param='Hc'] [data-value='0.34']").removeClass("inactiveOption");
            $("[data-param='Hc'] [data-value='0.00']").removeClass("inactiveOption");
            // $("[data-param='Hc'] [data-value='0.34']").show();
            // $("[data-param='Hc'] [data-value='0.00']").show();
        }
        if (params.Hc == "0.34" || params.Hc == "0.00") {
            // $("[data-param='ms'] [data-value='0.5']").hide();
            $("[data-param='ms'] [data-value='0.5']").addClass("inactiveOption");
            if (params.ms == "0.5") {
                params.ms = "1.0";
                $("[data-param='ms'] [data-value='1.0']").addClass("activeOption");
                $("[data-param='ms'] [data-value='0.5']").removeClass("activeOption");
            }
        } else {
            // $("[data-param='ms'] [data-value='0.5']").show();
            $("[data-param='ms'] [data-value='0.5']").removeClass("inactiveOption");
        }
    }
    $(".TDEoption").on("click", function() {
        if (!$(this).hasClass("inactiveOption")) {
            param = $(this).closest(".TDEparam").data("param");
            value = $(this).data("value");
            params[param] = value;
            $(this).siblings().removeClass("activeOption");
            $(this).addClass("activeOption");
            $("#TDEvideo").attr("src", "microTDE_mp4/snapshots_mbh_"+params.mbh+"_mstar_"+params.ms+"_b_"+params.b+"_Nres_500000_H_"+params.Hc+".mp4");
            adjustOptions();
        }
    });
});
