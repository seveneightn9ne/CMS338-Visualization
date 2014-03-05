$(document).ready(function(){
    load_data(window.sweet_data, function(){
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

})


function load_data(data, callback) {
    // add metas, intentions, elements
    categories = ["metas", "intentions", "elements"]
    for (var c = 0; c <3; c++) {
        cat = categories[c]
        console.log(cat)
        for (var e=0; e<data["all_"+cat].length; e++) {
            element = data["all_"+cat][e]
            console.log(element)
            object = $("<span>")
                .addClass("label")
                .addClass("is-"+element)
                .html(element)
            $("."+cat).append(object)
        }
    }

    for (var e=0; e<data["blog_entries"].length; e++) {
        author = data["blog_entries"][e]["author"]
        post_url = data["blog_entries"][e]["post_url"]
        object = $("<span>")
            .addClass("label")
            .addClass("is-"+author)
            .append($("<a>")
                .attr("href", post_url)
                .attr("target", "_blank")
                .html(author)
            )
        for (var c = 0; c < 3; c++) {
            cat = categories[c]
            labels = data["blog_entries"][e][cat]
            for (var l=0; l<labels.length; l++){
                label = labels[l]
                object.addClass("tags-"+label)
                $(".is-"+label).addClass("tags-"+author)
            }
        }
        $(".author").append(object)
    }
    callback()

}