var highScoresEl = document.querySelector("#highscores");
var clearHighScoresEl = document.querySelector("#clear");


// use the “getItem” function to the the current highscores data
function displayHighScores() {
    var highScoresEl = document.getElementById("highscores");

    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscores.sort(function(a,b) {
        return b.score - a.score;
    });

    highScoresEl.innerHTML = " ";

    // Then you can use a loop to display each entry
    for (var i = 0; i < highscores.length; i++) {
        var entry = highscores[i];
        var listItem = document.createElement("li");
        listItem.textContent = entry.initials + ": " + entry.score;
        highScoresEl.appendChild(listItem);
    }

    //clears highscores once the button is clicked 
    clearHighScoresEl.addEventListener("click", function (){
        highScoresEl.innerHTML = "";
        localStorage.removeItem("highscores");
    })
    
}
displayHighScores()

