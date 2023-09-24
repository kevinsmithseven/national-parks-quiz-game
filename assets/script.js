//Question and answer objects

var questions = {
    question1: "Which president established the greatest number of National Parks?",
    question2: "What was the very first National Park established?",
    question3: "Which National Park were scenes from Star Wars Episode IV: A New Hope filmed, representing the fictional planet of Tatooine?",
    question4: "The biggest single mountain on earth is found in which National Park?",
    question5: "In which National Park can you find the world’s largest known living single stem tree, General Sherman?"
};

var answersQuestion1 = {
    question1Option1: "Jimmy Carter",
    question1Option2: "Theodore Roosevelt",
    question1Option3: "William Taft",
    question1Option4: "Barack Obama"
};

var answersQuestion2 = {
    question2Option1: "Yosemite National Park",
    question2Option2: "Sequoia National Park",
    question2Option3: "Yellowstone National Park",
    question2Option4: "Mount Rainier National Park"
};

var answersQuestion3 = {
    question3Option1: "Grand Canyon National Park",
    question3Option2: "Bryce Canyon National Park",
    question3Option3: "Joshua Tree National Park",
    question3Option4: "Death Valley National Park"
};

var answersQuestion4 = {
    question4Option1: "Yosemite National Park",
    question4Option2: "Hawaii Volcanoes National Park",
    question4Option3: "Rocky Mountain National Park",
    question4Option4: "Grand Teton National Park"
};

var answersQuestion5 = {
    question5Option1: "Redwood National Park",
    question5Option2: "Olympic National Park",
    question5Option3: "King's Canyon National Park",
    question5Option4: "Sequoia National Park"
};

var correctAnswers = {
    question1: answersQuestion1.question1Option1,
    question2: answersQuestion2.question2Option3,
    question3: answersQuestion3.question3Option4,
    question4: answersQuestion4.question4Option2,
    question5: answersQuestion5.question5Option4
};







//Create variables using DOM
var startButton = document.getElementById("start-button");
var countdownTimer = document.getElementById("timer");



//Need a function to start the game




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
        }
    }, 1000);
}

let timeLeft = 60; // 1 minute
function updateTimer() {
    const timerElement = document.getElementById("quizTimer");
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = Time Left: ${ minutes }:${ seconds < 10 ? "0" : "" }${ seconds };

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
    } else {
        timeLeft--;
    }
}


//Need function to check if answer is correct



//Need function to reduce time if answer is wrong




