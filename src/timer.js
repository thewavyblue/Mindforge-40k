// Timer is used to count down from X
import { timerDisplay, timerInterval, score } from "./timedMode.js";

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

function loadPage(pageUrl) {
    fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
        document.getElementById("main").innerHTML = html;
        document.getElementById("final-score").innerHTML = score;
    })
    .catch(error => console.error('Error loading page:', error));
}