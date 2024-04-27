import { score, questionCounter } from "./timedMode.js";

const btnPlayAgain = document.getElementById("btn-play-again");

// function handles the loading of the game-over.html page. It is injected into the body of the parent html
export function loadPage(pageUrl) {
    fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
        document.querySelector('body').innerHTML = html;
        let finalScore = document.getElementById("final-score");
        
        // Display final score
        finalScore.innerText = score;
        console.log(`Times up! Your final score: ${score} out of ${questionCounter} questions answered correctly!`);
        
        // High scores:
        // finalScore.innerText = localStorage.getItem("finalScore");
        // if (!localStorage.getItem("finalScore") > 0) {
        //     console.log("no score!");
        //     localStorage.setItem("finalScore", score);
        // }

        // on click, clear localStorage for next game
        // btnPlayAgain.addEventListener("click", () => {
            
        // });
    })
    .catch(error => console.error('Error loading page:', error));
}

