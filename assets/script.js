//Question and answer objects

const myQuestions = [{
    questionText: "Which president established the greatest number of National Parks?",
    questionChoices: ["Jimmy Carter", "Theodore Roosevelt", "William Taft", "Barack Obama"],
    correctAnswer: 0
}, {
    questionText: "What was the very first National Park established?",
    questionChoices: ["Yosemite National Park", "Sequoia National Park", "Yellowstone National Park", "Mount Rainier National Park"],
    correctAnswer: 2
}, {
    questionText: "Which National Park were scenes from Star Wars Episode IV: A New Hope filmed, representing the fictional planet of Tatooine?",
    questionChoices: ["Grand Canyon National Park", "Bryce Canyon National Park", "Joshua Tree National Park", "Death Valley National Park"],
    correctAnswer: 3
}, {
    questionText: "The biggest single mountain on earth is found in which National Park?",
    questionChoices: ["Yosemite National Park", "Hawaii Volcanoes National Park", "Rocky Mountain National Park", "Grand Teton National Park"],
    correctAnswer: 1
}, {
    questionText: "In which National Park can you find the world’s largest known living single stem tree, General Sherman?",
    questionChoices: ["Redwood National Park", "Olympic National Park", "King's Canyon National Park", "Sequoia National Park"],
    correctAnswer: 3
}]
// console.log(myQuestions);




//Create variables 
var score = 0;
var questionIndex = 0;
var wrongPenalty = 10;
var startButton = document.getElementById("start-button");
var countdownTimer = document.getElementById("timer");
var startSection = document.getElementById("start-section")
var quizSection = document.getElementById("quiz-section")
var scoreScreen = document.getElementById("user-details")
var quizTimer;
var timerCount;
var createOl = document.createElement("ol");
var createSection = document.createElement("p")

// Start Game
function startQuiz() {
    // hide start screen on click of start button
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");

    showCurrentQuestion();
    startTimer()
}



// Iterate through questions on the array

function showCurrentQuestion() {
    var currentQuestion = myQuestions[questionIndex];

    var title = document.getElementById("question-text");
    title.textContent = currentQuestion.questionText;

    for (let i = 0; i < currentQuestion.questionChoices.length; i++) {
        var choice = currentQuestion.questionChoices[i];

        var li = document.getElementById(`answer-${i}`);
        li.textContent = choice

        li.dataset.correct = i === currentQuestion.correctAnswer;
    }
}

// Check and see if user selected the correct answer
function checkScore(isCorrect) {


    if (isCorrect) {
        createSection.textContent = "Correct!";

    } else {
        
        var correctAnswerText = myQuestions[questionIndex].questionChoices[myQuestions[questionIndex].correctAnswer];
        createSection.textContent = "Incorrect! The correct answer is: " + correctAnswerText;
        // subtract time if wrong
        timerCount = timerCount - wrongPenalty;

    }
    console.log(timerCount);

    document.body.appendChild(createSection);

    // console.log(isCorrect)
    // console.log(createSection);
    // console.log(myQuestions[questionIndex].correctAnswer);
    console.log(myQuestions[questionIndex].questionChoices[myQuestions[questionIndex].correctAnswer]);

    //increment or decrement score

    //increase questionIndex by one
    //if there are more questions call showCurrent Question
    //otherwise call endQuiz

    questionIndex++;
    if (questionIndex < myQuestions.length) {
        showCurrentQuestion();

    } else {
        endQuiz();
    }
}

function endQuiz() {

    if (timerCount >= 0) {
        var finalScore = timerCount;
        var finalScoreMessage = document.createElement("p");
        finalScoreMessage = "Your final score is: " + finalScore;

        // scoreScreen.appendChild(finalScoreMessage);
    }

    //hide quizSection
    quizSection.classList.add("hide");


    //Show user details form

}

// call function gets called when the form submit button is clicked
function saveScore() {


    // read high-scores from local storage (empty array if it doesn't exist)

    // add user initials and score to above array

    // save updated array to local storage
}

function showScore() {
    // read high-scores from local storage


    // dynamically add li for each high score

    // [
    //     {
    //         initials:"DMG",
    //         score: 2
    //     }
    // ]
}

function startTimer() {
    timerCount = 75
    quizTimer = setInterval(function () {
        timerCount--;
        if (timerCount > 1) {
            countdownTimer.textContent = timerCount + " seconds remaining";

        } else if (timerCount === 1) {
            countdownTimer.textContent = timerCount = " second remaining";

        } else {
            countdownTimer.textContent = "Time's Up!"
            clearInterval(quizTimer);
        }
    }, 1000)
}


// Countdown timer on starts on click of start button and starts quiz

startButton.addEventListener("click", startQuiz)

document.body.addEventListener('click', function (event) {
    if (event.target.className === "answers") {
        checkScore(event.target.dataset.correct)
        console.log('Clicked element:', event.target);
    }
})

console.log();








