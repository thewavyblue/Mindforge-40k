import { displayFinalScore } from "./gameOver.js";

let finalScore = document.getElementById("final-score");

export function loadScreen(screenId) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("body").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", screenId + ".html", true);
    xhttp.send();

    xhttp.addEventListener("load", function() {
        if (xhttp.status >=200 && xhttp.status < 300) {
            displayFinalScore();
            // finalScore.innerText = 4;
            console.log(finalScore + " loads!");
        } else {
            console.log("this doesn't work");
        }
    })
}

// Function to navigate to a screen
export function navigateTo(screenId) {
    loadScreen(screenId);
}




// Initial load of the first screen
// loadScreen("screen1");