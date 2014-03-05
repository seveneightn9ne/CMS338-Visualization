$(document).ready(function(){
    $(".description").hide()
    $(".label").hover(function(){
        classes = $(this).attr("class").split(" ")
        $(this).find(".description").show()
        for(i=0; i<classes.length; i++) {
            if (classes[i].indexOf("is-") == 0) {
                is = classes[i].substring(3)
            }
        }
        $(".label").each(function(){
            if ($(this).hasClass("tags-"+is) || $(this).hasClass("is-"+is)) {
                $(this).addClass("bold")
            } else {
                $(this).addClass("blur")
            }
        })
    }, function() {
        $(".label").removeClass("blur").removeClass("bold")
        $(this).find(".description").hide()
    })
})