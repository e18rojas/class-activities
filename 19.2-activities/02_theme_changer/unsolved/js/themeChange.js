$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular"){
        $("#theme").attr("heref", "css/blank.css")
        console.log("it's blue");
    }

else if ($(this).hasClass("blue"){
    $("#theme").attr("heref", "css/blue.css")
$("#theme").attr("heref", "css/blue.css")
        console.log("it's blue");
    }
    else if ($(this).hasClass("dark"){
        $("#theme").attr("heref", "css/dark.css")
    $("#theme").attr("heref", "css/dark.css")
            console.log("it's dark in here");

})