chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    var url = "http://www.omdbapi.com/?t="+ selection;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    console.log(xhr.status);
    console.log(xhr.statusText);
    var imdb = xhr.response;

    var json = JSON.parse(imdb);
    // var rating = json.imdbRating;
    var rating ="Title : "+ json.Title + "\n" + "\n"
            + "IMdb Rating : " +  json.imdbRating + "\n" + "\n"
            + "Genre : " +  json.Genre + "\n" + "\n"
            + "Year : " + json.Year + "\n" + "\n"
            + "Cast : " + json.Actors + "\n" + "\n"
            + "Runtime : " + json.Runtime + "\n" + "\n"
            + "Rotten Tomato Rating : " + json.tomatoRating + "\n" + "\n"
            + "Plot : " + json.Plot + "\n";
    document.getElementById("output").innerHTML  = rating;
});