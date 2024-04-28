// this app.js handles the loading of other screens, centralised within the app.html file
// import { gameModeRequest } from "./index.js";

function loadPage(pageUrl) {
    fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
        document.getElementById("main").innerHTML = html;
    })
    .catch(error => console.error('Error loading page:', error));
        
}

// loadPage("setup-timed-mode.html");

// let finalScore = document.getElementById("final-score");

// // Display final score
// finalScore.innerText = score;
// console.log(`Times up! Your final score: ${score} out of ${questionCounter} questions answered correctly!`);

// High scores:
// finalScore.innerText = localStorage.getItem("finalScore");
// if (!localStorage.getItem("finalScore") > 0) {
//     console.log("no score!");
//     localStorage.setItem("finalScore", score);
// }

// document.addEventListener("DOMContentLoaded", loadPagePlease); 

// export function loadPagePlease() {
    //     console.log("app page loaded");
//     return true;
// };
