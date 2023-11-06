# Edgars-Music-Quiz

Module 6 Challange 

## Description: 

Module 6 challenge - creating a guitar quiz. The quiz consists of 6 questions about guitars and the characteristics of music.
We were provided with HTML and CSS code for it but no JavaScript. I tried to follow the best practices and created multiple JS files - one for questions, another one for the game logic and the last one for scores.

Our instructor gave us some hints and ideas on how to structure the quiz. He presented us with an idea to store questions in an array of objects with questions, answers and a correct answer index. 

Afterwards, in the logic.js file, I created new variables with querySelectors to access specific IDs and parts in the HTML page.
Created a .addEventListener to the “Start the Quiz” button to kick off a series of questions. This event listener includes a set of functions in itself. Once the button is pressed timer starts and the displayQuestions function is set.

displayQuestion function contains for loop that iterates over the questions and checks if the answer is correct or incorrect.
Here I had some help from ASK BCS Learning Assistant. I couldn’t figure out why when pressing the correct answer it doesn’t show correct. The learning assistant pointed out that in CSS class there is a .hide property. In the JS code, I’ve commented on the lines that the person provided. Also Learning Assistant suggested that we add a timer to correct or incorrect text to make it look a bit better. 

I also encountered a problem that whenever I answered a question 10 sec was subtracted instead of when I would answer it incorrectly. I later found out that the problem was in correctAnswerIndex. When that was fixed it started to work. 

Lastly, it calls for the endQuiz function. I tried to write it myself, I was calling the function in my logic.js file and listing the function in my scores.js and for some reason I cannot get it to work. I managed to add an event listener so that when I click submit I’m taken to highscores.html
Again, I’m asking ASK BCS Learning Assistant for help here. The learning assistant helped me with the issue. I’ve commented above the code the person provided. It solved the issue with getting high score to local storage but it doesn’t show it on the screen yet. I have to fix that

## Link
https://grazulisedgars.github.io/Edgars-Music-Quiz/

## ScreenShot
![Alt text](<assets/img/Screenshot 2023-11-06 at 17.37.41.png>)

# Licence 
MIT