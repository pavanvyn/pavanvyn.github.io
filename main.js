$(window).on("load", function() {
    // navbar close icon toggle
    $("#closeicon").on("click", function(){
        $("#closeicon").toggleClass("change");
        $("#menubar").toggleClass("visible");
    });
    if ($(window).width() < $(window).height()) { // mobile portrait mode
        $("#menubar ul li").on("click", function(){
            $("#closeicon").toggleClass("change");
            $("#menubar").toggleClass("visible");
        });
    }

    // navbar click effect
    $("#menubar ul li").on("click", function() {
        var section= $(this).data("section");
        var menubarHeight = $("#menubar").outerHeight();
        if ($(window).width() < $(window).height()) { // mobile portrait mode
            menubarHeight = 0;
        }
        var sectionPos = $("#"+section).offset().top;
        $("body, html").animate({scrollTop: sectionPos - menubarHeight}, 1000, "swing");
    });

    // window scroll effect
    var sections = $("section");
    var menulists = $("#menubar ul li");
    var halfHeight = $(window).height()/2;
    $(window).on("scroll", function() {
        var windowPos = $(window).scrollTop();      
        sections.each(function(index) {
            var section = $(this)
            var sectionPos = section.offset().top;
            if (index < sections.length-1) {
                var nextSection = sections.eq(index+1)
                var nextSectionPos = nextSection.offset().top;
                if (windowPos >= sectionPos - halfHeight && windowPos < nextSectionPos - halfHeight) {
                    menulists.removeClass("activeMenu");
                    menulists.eq(index).addClass("activeMenu");
                }
            } else {
                if (windowPos >= sectionPos - halfHeight) {
                    menulists.removeClass("activeMenu");
                    menulists.eq(index).addClass("activeMenu");
                }
            }
        });
    });

    // collision and merger animation options
    let collmerparams = { type: "Collision: b = 0.25", quantity: "Density", ms1ms2: "10 + 5", b: "0.25" };  
    let ms1ms2List = ["10 + 8", "10 + 7", "10 + 5", "8 + 7", "8 + 5", "7 + 5"];
    let ms1List = ["10.0", "10.0", "10.0", "8.0", "8.0", "7.0"];
    let ms2List = ["8.0", "7.0", "5.0", "7.0", "5.0", "5.0"];
    let Nr1List = ["2000000", "2000000", "2000000", "1600000", "1600000", "1400000"];
    let Nr2List = ["1600000", "1400000", "1000000", "1400000", "1000000", "1000000"];
    let Hc1List = ["0.51", "0.51", "0.51", "0.59", "0.59", "0.62"];
    let Hc2List = ["0.59", "0.62", "0.66", "0.62", "0.66", "0.66"];
    function collmerAdjustOptions() {
        if (collmerparams.type == "Collision: b = 0.50") {
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 8']").addClass("inactivecollmeroption");
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 7']").addClass("inactivecollmeroption");
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='8 + 5']").addClass("inactivecollmeroption");
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='7 + 5']").addClass("inactivecollmeroption");
            if (collmerparams.ms1ms2 == "10 + 8" || collmerparams.ms1ms2 == "10 + 7" || collmerparams.ms1ms2 == "8 + 5" || collmerparams.ms1ms2 == "7 + 5") {
                collmerparams.ms1ms2 = "10 + 5";
                $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 5']").addClass("activecollmeroption");
                $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 8']").removeClass("activecollmeroption");
                $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 7']").removeClass("activecollmeroption");
                $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='8 + 5']").removeClass("activecollmeroption");
                $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='7 + 5']").removeClass("activecollmeroption");
            }
        } else {
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 8']").removeClass("inactivecollmeroption");
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='10 + 7']").removeClass("inactivecollmeroption");
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='8 + 5']").removeClass("inactivecollmeroption");
            $(".collmerparam[data-param='ms1ms2'] .collmeroption[data-value='7 + 5']").removeClass("inactivecollmeroption");
        }
        if (collmerparams.ms1ms2 == "10 + 8" || collmerparams.ms1ms2 == "10 + 7" || collmerparams.ms1ms2 == "8 + 5" || collmerparams.ms1ms2 == "7 + 5") {
            $(".collmerparam[data-param='type'] .collmeroption[data-value='Collision: b = 0.50']").addClass("inactivecollmeroption");
            if (collmerparams.type == "Collision: b = 0.50") {
                collmerparams.type = "Collision: b = 0.25";
                $(".collmerparam[data-param='type'] .collmeroption[data-value='Collision: b = 0.25']").addClass("activecollmeroption");
                $(".collmerparam[data-param='type'] .collmeroption[data-value='Collision: b = 0.50']").removeClass("activecollmeroption");
            }
        } else {
            $(".collmerparam[data-param='type'] .collmeroption[data-value='Collision: b = 0.50']").removeClass("inactivecollmeroption");
        }
    }
    $(".collmeroption").on("click", function() {
        if (!$(this).hasClass("inactivecollmeroption")) {
            param = $(this).closest(".collmerparam").data("param");
            value = $(this).data("value");
            collmerparams[param] = value;
            $(this).siblings().removeClass("activecollmeroption");
            $(this).addClass("activecollmeroption");
            let id = ms1ms2List.indexOf(collmerparams.ms1ms2);
            let ms1 = ms1List[id];
            let ms2 = ms2List[id];
            let Nr1 = Nr1List[id];
            let Nr2 = Nr2List[id];
            let Hc1 = Hc1List[id];
            let Hc2 = Hc2List[id];
            if (collmerparams.type == "Collision: b = 0.25") {
                let movieName = "snapshots_new_mstar1_"+ms1+"_mstar2_"+ms2+"_b_0.25_Nres1_"+Nr1+"_Nres2_"+Nr2+"_H1_"+Hc1+"_H2_"+Hc2+"_dipole_B1_1.0_3_B2_1.0_3.mp4";
                if (collmerparams.quantity == "Density") {
                    movieName = "den_"+movieName;
                } else if (collmerparams.quantity == "Magnetic field") {
                    movieName = "mag_"+movieName;
                }
                $("#collmervideo").attr("src", "collision_mp4/"+movieName);
            } else if (collmerparams.type == "Collision: b = 0.50") {
                let movieName = "snapshots_new_mstar1_"+ms1+"_mstar2_"+ms2+"_b_0.50_Nres1_"+Nr1+"_Nres2_"+Nr2+"_H1_"+Hc1+"_H2_"+Hc2+"_dipole_B1_1.0_3_B2_1.0_3.mp4";
                if (collmerparams.quantity == "Density") {
                    movieName = "den_"+movieName;
                } else if (collmerparams.quantity == "Magnetic field") {
                    movieName = "mag_"+movieName;
                }
                $("#collmervideo").attr("src", "collision_mp4/"+movieName);
            } else if (collmerparams.type == "Merger") {
                let movieName = "snapshots_new_mstar1_"+ms1+"_mstar2_"+ms2+"_ai_1.5_Nres1_"+Nr1+"_Nres2_"+Nr2+"_H1_"+Hc1+"_H2_"+Hc2+"_dipole_B1_1.0_3_B2_1.0_3.mp4";
                if (collmerparams.quantity == "Density") {
                    movieName = "den_"+movieName;
                } else if (collmerparams.quantity == "Magnetic field") {
                    movieName = "mag_"+movieName;
                }
                $("#collmervideo").attr("src", "merger_mp4/"+movieName);
            }
            collmerAdjustOptions();
        }
    });

    // microTDE animation options
    let TDEparams = { mbh: "10.0", ms: "1.0", Hc: "0.70", b: "1.00" };
    function TDEAdjustOptions() {
        if (TDEparams.ms == "0.5") {
            $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.34']").addClass("inactiveTDEoption");
            $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.00']").addClass("inactiveTDEoption");
            if (TDEparams.Hc == "0.34" || TDEparams.Hc == "0.00") {
                TDEparams.Hc = "0.70";
                $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.70']").addClass("activeTDEoption");
                $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.34']").removeClass("activeTDEoption");
                $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.00']").removeClass("activeTDEoption");
            }
        } else {
            $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.34']").removeClass("inactiveTDEoption");
            $(".TDEparam[data-param='Hc'] .TDEoption[data-value='0.00']").removeClass("inactiveTDEoption");
        }
        if (TDEparams.Hc == "0.34" || TDEparams.Hc == "0.00") {
            $(".TDEparam[data-param='ms'] .TDEoption[data-value='0.5']").addClass("inactiveTDEoption");
            if (TDEparams.ms == "0.5") {
                TDEparams.ms = "1.0";
                $(".TDEparam[data-param='ms'] .TDEoption[data-value='1.0']").addClass("activeTDEoption");
                $(".TDEparam[data-param='ms'] .TDEoption[data-value='0.5']").removeClass("activeTDEoption");
            }
        } else {
            $(".TDEparam[data-param='ms'] .TDEoption[data-value='0.5']").removeClass("inactiveTDEoption");
        }
    }
    $(".TDEoption").on("click", function() {
        if (!$(this).hasClass("inactiveTDEoption")) {
            param = $(this).closest(".TDEparam").data("param");
            value = $(this).data("value");
            TDEparams[param] = value;
            $(this).siblings().removeClass("activeTDEoption");
            $(this).addClass("activeTDEoption");
            $("#TDEvideo").attr("src", "microTDE_mp4/snapshots_mbh_"+TDEparams.mbh+"_mstar_"+TDEparams.ms+"_b_"+TDEparams.b+"_Nres_500000_H_"+TDEparams.Hc+".mp4");
            TDEAdjustOptions();
        }
    });
});
