$(window).on('resize',function() {
    location.reload();
});

$(window).on("load", function() {
    //navbar toggle
    $("#menuicon").click(function(){
        $("#menuicon").toggleClass("change");
        $("#menubar").toggleClass("visible");
    });

    //scroll and click effects
    var aboutMePos = $("#aboutMe").offset().top;
    var educationPos = $("#education").offset().top;
    var projectsPos = $("#projects").offset().top;
    var experiencePos = $("#experience").offset().top;
    var activitiesPos = $("#activities").offset().top;


    $(document).on("click", "#aboutMeMenu", function() {
        $("body, html").animate({scrollTop: aboutMePos}, 500, "swing");
    });
    $(document).on("click", "#educationMenu", function() {
        $("body, html").animate({scrollTop: educationPos}, 500, "swing");
    });
    $(document).on("click", "#projectsMenu", function() {
        $("body, html").animate({scrollTop: projectsPos}, 500, "swing");
    });
    $(document).on("click", "#experienceMenu", function() {
        $("body, html").animate({scrollTop: experiencePos}, 500, "swing");
    });
    $(document).on("click", "#activitiesMenu", function() {
        $("body, html").animate({scrollTop: activitiesPos}, 500, "swing");
    });

    var halfHeight = window.innerHeight/2;
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop() + 1;
        if (windowPos >= aboutMePos - halfHeight && windowPos < educationPos - halfHeight) {
            $("#menubar ul li").children().css("color","#dddddd");
            $("#menubar ul li").children().css("font-weight","normal");
            $("#menubar ul li#aboutMeMenu p").css("color","#ff8c1a");
            $("#menubar ul li#aboutMeMenu p").css("font-weight","bold");
        }
        else if (windowPos >= educationPos - halfHeight && windowPos < projectsPos - halfHeight) {
            $("#menubar ul li").children().css("color","#dddddd");
            $("#menubar ul li").children().css("font-weight","normal");
            $("#menubar ul li#educationMenu p").css("color","#ff8c1a");
            $("#menubar ul li#educationMenu p").css("font-weight","bold");
        }
        else if (windowPos >= projectsPos - halfHeight && windowPos < experiencePos - halfHeight) {
            $("#menubar ul li").children().css("color","#dddddd");
            $("#menubar ul li").children().css("font-weight","normal");
            $("#menubar ul li#projectsMenu p").css("color","#ff8c1a");
            $("#menubar ul li#projectsMenu p").css("font-weight","bold");
        }
        else if (windowPos >= experiencePos - halfHeight && windowPos < activitiesPos - halfHeight) {
            $("#menubar ul li").children().css("color","#dddddd");
            $("#menubar ul li").children().css("font-weight","normal");
            $("#menubar ul li#experienceMenu p").css("color","#ff8c1a");
            $("#menubar ul li#experienceMenu p").css("font-weight","bold");
        }
        else if (windowPos >= activitiesPos - halfHeight) {
            $("#menubar ul li").children().css("color","#dddddd");
            $("#menubar ul li").children().css("font-weight","normal");
            $("#menubar ul li#activitiesMenu p").css("color","#ff8c1a");
            $("#menubar ul li#activitiesMenu p").css("font-weight","bold");
        }
    });   
});
