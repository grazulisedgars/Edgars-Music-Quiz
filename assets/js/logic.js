var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timeEl = document.querySelector(".timer");


var currentQuestionIndex = 0;
var correctAnswer = 0;

// Clicking the “Start the Quiz” button displays a series of question 
buttonEl.addEventListener("click", function() {
    
//Hide the start screen and show the questions container 
document.getElementById("start-screen").classList.add("hide");
questionsEl.classList.remove("hide");

displayQuestion()
setTime()
});

function displayQuestion () {
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

    choiceButton.addEventListener("click", function() {
      // Check if the clicked answer is correct
      // Need to add some text that answer was correct and add sound effect
      if (i === currentQuestion.correctAnswer) {
        correctAnswer++;
      } 
      //else need to add that the answer was wrong and subtract time
      

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
        endQuiz(correctAnswer);
      }
    }
    
    function endQuiz(score) {
      // Hide the questions container
      questionsEl.classList.add("hide");
    
      // Show the end screen
      var endScreen = document.getElementById("end-screen");
      endScreen.classList.remove("hide");
    
      // Display the final score
      document.getElementById("final-score").textContent = score;

    }

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

// If a question is answered incorrectly, additional time is subtracted from the timer 

// The game ends when all questions have been answered or the timer reaches zero 

// After the game ends,  the user can save their initials and score to a high scores view using local storage 
