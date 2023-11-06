//This JS file should keep the scores of the players results
// scores.js

function saveScore(initials, score) {
    // Check if local storage is available
    if (typeof localStorage !== "undefined") {
        // Get existing highscores or initialize an empty array
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

        // Add the user's initials and score to the highscores array
        highscores.push({ initials: initials, score: score });

        // Store the updated highscores array in local storage
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
}
