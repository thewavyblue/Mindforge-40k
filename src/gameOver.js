import { score, questionCounter, playAgain } from "./timedMode.js";

let finalScore = document.getElementById("final-score");
let btnPlayAgain = document.getElementById("btn-play-again");

export function displayFinalScore() {
        console.log(`Times up! Your final score: ${score} out of ${questionCounter} questions answered correctly!`);
        // finalScore.innerText = score;
}

// btnPlayAgain.addEventListener("click", () => {
//     playAgain();
// })

// export function displayFinalScore() {
    // return new Promise( (resolve, reject) => {
    //     if (finalScore) {
    //         console.log(`Times up! Your final score: ${score} out of ${questionCounter} questions answered correctly!`);
    //         resolve(finalScore.innerText = score);
    //     } else {
    //         reject("no value to show");
    //     }
    // })
// }