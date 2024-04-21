import { loadScreen } from "./loadScreen.js"
// Timer is used to count down from X
import { timerDisplay, score, questionCounter, timerInterval } from "./timedMode.js";
import { displayFinalScore } from "./gameOver.js";

// Set the interval for the timer in milliseconds
export let interval = 1000; // 1000 milliseconds = 1 second

// Initialize a counter
export let timerCount = 7;

// Function to be executed at each interval
export function timerTick() {
    timerCount--;
    if (timerCount <= 0) {
        // popup to show times up and final score.
        loadScreen("game-over");
        clearInterval(timerInterval);
    }
    timerDisplay.innerText = timerCount;
    console.log(`Timer tick ${timerCount}`);
    // You can add any other actions here that should happen on each tick
}

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});