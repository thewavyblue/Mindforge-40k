//import objects from external 
import { armyStats } from "./armyStats.js";
import { questions } from "./questions.js";

// Get DOM elements
const questionLabel = document.getElementById("questionLabel");
let answerInput = document.getElementById("answerInput");
const btnSubmit = document.getElementById("btnSubmit");
const btnSkip = document.getElementById("btnSkip");

// Create an array from armyStats
let statsArr = Object.values(armyStats);
console.log(`The armyStats array of entries: ${statsArr}`);

// Create an array from unit1
let unit1StatsArr = Object.values(armyStats.unit1.stats);
console.log(`The armyStats array of entries: ${unit1StatsArr}`);


// Create a random number to select a unit to query
let unitRandomNum = 1+ Math.floor(Math.random() * statsArr.length);
console.log(unitRandomNum);
//console.log(`Unit name: ${statsArr[unitRandomNum][1]}`);
console.log(armyStats[1]);

// Create a random number based on the length of the stats array
let randomNum = Math.floor(Math.random() * statsArr.length);

// Keep track of the index of the current question
let questionIndex = randomNum;

// Function to generate a new question
function generateNewQuestion() {
    // Generate a random number between 0 and statsArr.length
    let randomNum = Math.floor(Math.random() * statsArr.length);
    // Update the question index
    questionIndex = randomNum;
    // Get the question text from the questions array
    const question = Object.values(questions)[questionIndex];
    // Display the new question
    questionLabel.innerHTML = question;
}

// Function to handle answer submission
function submitAnswer() {
    
    // Get the answer corresponding to the current question index
    const answer = Object.values(armyStats.unit.stats)[questionIndex];
    console.log(answer);
    
    // Check if the submitted answer matches the correct answer
    if (answerInput.value == answer) {
        console.log(`${answerInput.value} is correct!`);
    } else {
        console.log(`${answerInput.value} is incorrect`);
    }

    // Generate a new question
    generateNewQuestion();
}

// Function to handle skipping a question
function skipQuestion() {
    console.log("Question skipped");
    // Generate a new question when skipped
    generateNewQuestion();
}

// Event listener for submit button
btnSubmit.addEventListener("click", submitAnswer);

// Event listener for skip button
btnSkip.addEventListener("click", skipQuestion);

// Generate initial question when the page loads
generateNewQuestion();

