  
$("p").each(function(){
    var text = $(this).text();
    if(text == ""){
    }
    else{
        var p = "" ; 
        var FullStops = text.split(". ");
        FullStops.forEach(Element => {
            p  = p + "<span>" + Element +  ". " + "</span>";
        });
        $(this).html(p);
    }
});

 
$("span").mouseover(function(){
    $(this).css("background-color", "skyblue");
})
$("span").mouseout(function(){
    $(this).css("background-color", "");
})

