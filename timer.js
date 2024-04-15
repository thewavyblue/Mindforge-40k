// Timer is used to count down from X
import { timerDisplay, score, questionCounter, timerInterval } from "./timedMode.js";

// Set the interval for the timer in milliseconds
export let interval = 1000; // 1000 milliseconds = 1 second

// Initialize a counter
export let timerCount = 60;

// Function to be executed at each interval
export function timerTick() {
    timerCount--;
    if (timerCount <= 0) {
        // timerCount = 0;
        // popup to show times up and final score.
        console.log(`Times up! Your final score: ${score} out of ${questionCounter} questions answered correctly!`);
        clearInterval(timerInterval);
    }
    timerDisplay.innerText = timerCount;
    console.log(`Timer tick ${timerCount}`);
    // You can add any other actions here that should happen on each tick
}

// Start the timer
// let timeCountDown = setInterval(timerTick, interval);