// Timer is used to count down from X
import { timerDisplay, timerInterval, score, questionCounter, skipCounter, selectedArmy, selectedCategory } from "./timedMode.js";

// Set the interval for the timer in milliseconds
export let interval = 1000; // 1000 milliseconds = 1 second

// Initialize a counter //! Remember to reset this after testing!
export let timerCount = 60; 

// Function to be executed at each interval
export function timerTick() {
    timerCount--;
    if (timerCount <= 0) {
        loadPage("/game-over.html");
        clearInterval(timerInterval);
    }
    timerDisplay.innerText = timerCount;
    // console.log(`Timer tick ${timerCount}`);
}

function loadPage(pageUrl) {
    fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
        document.getElementById("main").innerHTML = html;
        document.getElementById("final-score").innerText = score;
        document.getElementById("questions-total").innerText = questionCounter;
        
        if(skipCounter === 1){
            document.getElementById("skip-total").innerHTML = `You skipped <span class="strong">${skipCounter}</span> time!`;
        } else {
            document.getElementById("skip-total").innerHTML = `You skipped <span class="strong">${skipCounter}</span> times!`;
        }
        
        document.getElementById("selected-army").innerText = selectedArmy;
        document.getElementById("selected-category").innerText = selectedCategory;
    })
    .catch(error => console.error('Error loading page:', error));
}

