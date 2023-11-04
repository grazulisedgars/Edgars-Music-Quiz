var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timeEl = document.querySelector(".timer");

// Clicking the “Start the Quiz” button displays a series of question 

// Once the quiz begins, a countdown timer starts 

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeEl.textContent = " ";
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}
setTime();

// If a question is answered incorrectly, additional time is subtracted from the timer 

// The game ends when all questions have been answered or the timer reaches zero 

// After the game ends,  the user can save their initials and score to a high scores view using local storage 


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//iterate over the list of questions 
//if a user clicked on an answer 
//compare the value to the correct answer 
// if the thing user answered is correct 
// display correct
//else
//display incorrect 
//subtract time 