// import { displayFinalScore } from "./timer.js";

export function loadScreen(screenId) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("body").innerHTML = this.responseText;
            // displayFinalScore();
        }
    };
    xhttp.open("GET", screenId + ".html", true);
    xhttp.send();
}

// Function to navigate to a screen
export function navigateTo(screenId) {
    loadScreen(screenId);
}

// Initial load of the first screen
// loadScreen("screen1");