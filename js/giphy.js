$("button").click(getGIFs)

function getGIFs() {
    event.preventDefault()
    var query = $("input[type='search']").val()
    console.log(query);
    $.getJSON('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=dc6zaTOxFJmzC', function(json){
        console.log(json);

    });
    $("input[type='search']").val('')
}
