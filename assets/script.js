//Question and answer objects

var myQuestions = [{
    questionText: "Which president established the greatest number of National Parks?",
    questionChoices: ["Jimmy Carter", "Theodore Roosevelt", "William Taft", "Barack Obama"],
    correctAnswer: "Jimmy Carter"
}, {
    questionText: "What was the very first National Park established?",
    questionChoices: ["Yosemite National Park", "Sequoia National Park", "Yellowstone National Park", "Mount Rainier National Park"],
    correctAnswer: "Yellowstone National Park",
}, {
    questionText: "Which National Park were scenes from Star Wars Episode IV: A New Hope filmed, representing the fictional planet of Tatooine?",
    questionChoices: ["Grand Canyon National Park", "Bryce Canyon National Park", "Joshua Tree National Park", "Death Valley National Park"],
    correctAnswer: "Death Valley National Park",
}, {
    questionText: "The biggest single mountain on earth is found in which National Park?",
    questionChoices: ["Yosemite National Park", "Hawaii Volcanoes National Park", "Rocky Mountain National Park", "Grand Teton National Park"],
    correctAnswer: "Hawaii Volcanoes National Park",
}, {
    questionText: "In which National Park can you find the world’s largest known living single stem tree, General Sherman?",
    questionChoices: ["Redwood National Park", "Olympic National Park", "King's Canyon National Park", "Sequoia National Park"],
    correctAnswer: "Sequoia National Park"
}]

    




    
  









//Create variables 
var score = 0;
var wrongPenalty = 10;
var questionNumber = 0;
var startButton = document.getElementById("start-button");
var countdownTimer = document.getElementById("timer");
var startSection = document.getElementById("start")






//Need a function to navigate to next question

function navigate(direction) {
    
}




//Need function to run timer

function countdown() {

    // set timer to start at 75 seconds
    var timeLeft = 75;

    var quizTimer = setInterval(function () {
        // as long as "timeleft" is greater than 1
        if (timeLeft > 1) {
            // set the text content of countdownTimer to show remaining seconds
            countdownTimer.textContent = timeLeft + " seconds remaining";
            // decrement timeLeft by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // when timeLeft gets to 0, set countdownTimer to "second" instead of "seconds"
            countdownTimer.textContent = timeLeft + " second remaining";
        } else {
            // Once timeLeft gets to 0, set countdownTimer to an empty string
            countdownTimer.textContent = "";
            //stop timer
            clearInterval(countdown);
            //do i need a display message?
            // do i need a function to end the quiz?
            endQuiz();
        }
    }, 1000);
}

// let timeLeft = 60; // 1 minute
// function updateTimer() {
//     const timerElement = document.getElementById("quizTimer");
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;
//     timerElement.textContent = Time Left: ${ minutes }:${ seconds < 10 ? "0" : "" }${ seconds };

//     if (timeLeft === 0) {
//         clearInterval(timerInterval);
//         endQuiz();
//     } else {
//         timeLeft--;
//     }
// }


//Need function to check if answer is correct



//Need function to reduce time if answer is wrong




