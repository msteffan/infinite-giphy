var offset = 0;

$("button").click(function(){
    event.preventDefault()
    offset = 0;
    getGIFs();

});

function getGIFs() {
    // event.preventDefault()
    var query = $("input[type='search']").val()
    $.getJSON('http://api.giphy.com/v1/gifs/search?q='+query+'&offset='+offset+'&api_key=dc6zaTOxFJmzC', function(json){
        // console.log(json);
        // var response = json.data
        // console.log(json.data.length);
        for (i=0; i<10; i++ ){
            if (i==10){
                $("body").append("<img src='"+json.data[i].images.original.url+"' class='selector'/>")
            } else {
                $("body").append("<img src='"+json.data[i].images.original.url+"' />")
            }
            offset++
        }
    });
    // $("input[type='search']").val('')
}

// $(".selector").on('scroll',function(){
//     $('.selector').jscroll({
//         callback: getGIFs()
//     });
// })

$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height() - $(window).height()){
        $('.selector').jscroll({
            callback: getGIFs()
        });
    }
});
//
//
// $(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() >= $(document).height()){
//     getGIFs();
//   }
// }, 150);
