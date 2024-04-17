import { loadScreen } from "./src/loadScreen.js"
// Timer is used to count down from X
import { timerDisplay, score, questionCounter, timerInterval, finalScore } from "./timedMode.js";

// Set the interval for the timer in milliseconds
export let interval = 1000; // 1000 milliseconds = 1 second

// Initialize a counter
export let timerCount = 10;

// Function to be executed at each interval
export function timerTick() {
    timerCount--;
    if (timerCount <= 0) {
        // popup to show times up and final score.
        loadScreen("game-over");
        displayFinalScore();
        clearInterval(timerInterval);
        console.log(`Times up! Your final score: ${score} out of ${questionCounter} questions answered correctly!`);
    }
    timerDisplay.innerText = timerCount;
    console.log(`Timer tick ${timerCount}`);
    // You can add any other actions here that should happen on each tick
}

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});

// export function displayFinalScore() {
//         finalScore.innerHTML = score;
// }
// Start the timer
// let timeCountDown = setInterval(timerTick, interval);