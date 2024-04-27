// Timer is used to count down from X
import { timerDisplay, timerInterval } from "./timedMode.js";

// inport final score display on end of game

// import loadPage fro gameOver so when the game is over, it handles its own page
import { loadPage } from "./loader.js";

// Set the interval for the timer in milliseconds
export let interval = 1000; // 1000 milliseconds = 1 second

// Initialize a counter
export let timerCount = 20;

// Function to be executed at each interval
export function timerTick() {
    timerCount--;
    if (timerCount <= 0) {
        loadPage("/game-over.html");
        clearInterval(timerInterval);
    }
    timerDisplay.innerText = timerCount;
    console.log(`Timer tick ${timerCount}`);
}