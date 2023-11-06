var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timeEl = document.querySelector(".timer");


var currentQuestionIndex = 0;
var correctAnswer = 0;
var score = 0;
var secondsLeft = 60;

// Clicking the “Start the Quiz” button displays a series of question 
buttonEl.addEventListener("click", function () {

    //Hide the start screen and show the questions container 
    document.getElementById("start-screen").classList.add("hide");
    questionsEl.classList.remove("hide");

    setTime()
    displayQuestion()
});

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        //Gets the current question
        var currentQuestion = questions[currentQuestionIndex];

        //Update question title
        document.getElementById("question-title").textContent = currentQuestion.question;

        //Clear any previous choices 
        choicesEl.innerHTML = " ";

        // Create and display answer choices
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            var answer = currentQuestion.answers[i];
            var choiceButton = document.createElement("button");
            choiceButton.textContent = answer;

            choiceButton.addEventListener("click", function (event) {
                var selectedAnswer = event.target.textContent;

                // Need to add some text that answer was correct and add sound effect
                if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswerIndex]) {
                    correctAnswer++;
                    score += 10;
                    // Line 48 provided by ASK BCS learning assistant
                    document.getElementById("feedback").style.display = "block";
                    document.getElementById("feedback").textContent = "Correct";
                }
                //else need to add that the answer was wrong and subtract time
                else {
                    // Line 54 provided by ASK BCS learning assistant
                    document.getElementById("feedback").style.display = "block";
                    document.getElementById("feedback").textContent = "Incorrect";
                    secondsLeft -= 10;
                }
                //This setTimeOut Function was provided by AskBCS Learning assistant
                setTimeout(() => {
                    document.getElementById("feedback").style.display = "none";
                  
                  }, 1000);
                // Move to the next question
                currentQuestionIndex++;

                // Display the next question or end the quiz
                displayQuestion();
            });

            //Responsible for creating choice buttons
            choicesEl.appendChild(choiceButton);
        };
    } else {
        // The quiz is over
        endQuiz(score);
        document.getElementById("feedback").style.display = "none";
    }
}

function endQuiz(score) {
    // Stop the timer
    clearInterval(timerInterval);

    // Hide the questions container
    questionsEl.classList.add("hide");

    // Show the end screen
    var endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hide");

    // Display the final score
    document.getElementById("final-score").textContent = score;
}

// Once the quiz begins, a countdown timer starts 

var timerInterval;

function setTime() {
    // Set interval in variable
    timerInterval = setInterval(function () {
        timeEl.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            // Stop the timer and end the quiz
            clearInterval(timerInterval);
            timeEl.textContent = "0";
            endQuiz(score);
        } else {
            secondsLeft--; // Decrement the time
        }
    }, 1000);
}
// If a question is answered incorrectly, additional time is subtracted from the timer 

// The game ends when all questions have been answered or the timer reaches zero 

// After the game ends,  the user can save their initials and score to a high scores view using local storage 
