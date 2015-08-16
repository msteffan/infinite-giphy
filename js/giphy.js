var offset = 0;

$("button").click(function(){
    reset();
    event.preventDefault()
    offset = 0;
    getGIFs();
});

function getGIFs() {
    // set the value of query
    var query = $("input[type='search']").val()
    // call the giphy api with their test key
    $.getJSON('http://api.giphy.com/v1/gifs/search?q='+query+'&offset='+offset+'&api_key=dc6zaTOxFJmzC', function(json){
        for (i=0; i<10; i++ ){
            if (i==10){
                $("body").append("<img src='"+json.data[i].images.original.url+"' class='selector'/>")
            } else {
                $("body").append("<img src='"+json.data[i].images.original.url+"' />")
            }
            // increment the offset value so that the next batch of images loaded is the next 10 photos, not the same ones
            offset++
        }
    });


}
// infinite scroll
$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height() - $(window).height()){
        $('.selector').jscroll({
            callback: getGIFs()
        });
    }
});

// remove all images from previous search if there's a new search
function reset() {
    $("img").remove();

}
