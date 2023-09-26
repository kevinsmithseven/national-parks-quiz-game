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
console.log(myQuestions);




//Create variables 
var score = 0;
var questionIndex = 0;
var wrongPenalty = 10;
var questionNumber = 0;
var startButton = document.getElementById("start-button");
var countdownTimer = document.getElementById("timer");
var startSection = document.getElementById("start-section")
var quizSection = document.getElementById("quiz-section")
var quizTimer;
var timerCount;
var createOl = document.createElement("ol");



// Start Game
function startQuiz() {
    // startSection.setAttribute.display = "none";
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");

   showCurrentQuestion();
   startTimer()
}

//where is event listener for user clicking on a choice?

// Need to compare choice to correct answer; if wrong deduct penalty from timer

function showCurrentQuestion(){
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

function checkScore(isCorrect){
    //Show either on screen or in the console if the answer is correct
    console.log(isCorrect)

    // subtract time if wrong

    //increment or decrement score

    //increase questionIndex by one

    //if there are more questions call showCurrent Question

    //otherwise call endQuiz
}

function endQuiz(){
    //hide quizSection

    //Show user details form

}

//this function gets called when the form submit button is clicked
function saveScore(){
    // read high-scores from local storage (empty array if it doesn't exist)

    // add user initials and score to above array

    // save updated array to local storage
}

function showScore(){
    // read high-scores from local storage

    // dynamically add li for each high score

    // [
    //     {
    //         initals:"DMG",
    //         score: 2
    //     }
    // ]
}

function startTimer () {
    timerCount = 75
    quizTimer = setInterval(function () {
        timerCount--;
        if (timerCount > 1) {
            countdownTimer.textContent = timerCount + " seconds remaining";

        } else if (timerCount === 1) {
            countdownTimer.textContent = timerCount = " second remaining";

        } else {
            countdownTimer.textContent = "Time's Up!"
        }
    }, 1000)
}


//Countdown timer on starts on click of start button and starts quiz

startButton.addEventListener("click", startQuiz )

document.body.addEventListener('click', function(event){
    if(event.target.className === "answers"){
        checkScore(event.target.dataset.correct)
    }
})










//Form to capture initials and score




