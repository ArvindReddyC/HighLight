// $("p").mouseover(function(){
//     $(this).css("background-color", "blue");
// })
// $("p").mouseout(function(){
//     $(this).css("background-color", "");
// })
// $('p').html(function() {
//     debugger;
//     var content = $("p:first").text();
    

//     return $(this).text().replace(/\w+[,.]?\s+?/g , "<span>$&</span>")
// });

// // // $('p').on('mouseenter', 'span', function() {
// // //     var $span = $(this);
// // //     $('p span').filter(function() {
// // //         return $(this).offset().top == $span.offset().top;
// // //     }).css("background-color", "yellow");
// // // }).on('mouseleave', 'span', function() {
// // //     $('p span').css("background-color", "");
// // // })     
$("p").each(function(){
    var text = $(this).text();
    if(text == ""){
    }
    else{
        var p = "" ; 
        var FullStops = text.split(".");
        FullStops.forEach(Element => {
            p  = p + "<span>" + Element +  "." + "</span>";
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


// $('p').on('mouseenter', 'span', function() {
//     var $span = $(this);
//     $('p span').filter(function() {
//         return $(this).offset().top == $span.offset().top;
//     }).css("background-color", "skyblue");
// }).on('mouseleave', 'span', function() {
//     $('p span').css("background-color", "");
// })  


