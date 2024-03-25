//import objects from external 
import { armyStats } from "./armyStats.js";
import { questions } from "./questions.js";

// Get DOM elements
const questionLabel = document.getElementById("questionLabel");
let answerInput = document.getElementById("answerInput");
const btnSubmit = document.getElementById("btnSubmit");
const btnSkip = document.getElementById("btnSkip");

// Function to randomly select a unit and its stats
function selectRandomUnit(armyStats) {
    // Get keys of the units
    const unitKeys = Object.keys(armyStats).filter(key => key.startsWith('unit'));
    // Randomly select a unit key
    const randomUnitKey = unitKeys[Math.floor(Math.random() * unitKeys.length)];
    // Get the selected unit object
    const selectedUnit = armyStats[randomUnitKey];
    // Return the selected unit and its stats
    return {
        unitName: selectedUnit.unitName,
        stats: selectedUnit.stats
    };
}

// Example usage
const randomUnit = selectRandomUnit(armyStats);
console.log("Randomly selected unit:", randomUnit.unitName);
console.log("Corresponding stats:", randomUnit.stats);

// Create a random number based on the length of the stats array
let randomNum = Math.floor(Math.random() * 7);

// Keep track of the index of the current question
let questionIndex = randomNum;

// Function to generate a new question
function generateNewQuestion() {
    // Get the question text from the questions array
    const question = Object.values(questions)[questionIndex];
    // Generate a random number between 0 and 7
    let randomNum = Math.floor(Math.random() * 7);
    // Update the question index
    questionIndex = randomNum;
    // Display the new question
    questionLabel.innerHTML = `${randomUnit.unitName} <br/>${question}`;
    // console.log(randomNum);
}

// Function to handle answer submission
function submitAnswer() {
    // Get the answer corresponding to the current question index
    const answer = Object.values(randomUnit.stats)[questionIndex];
    console.log(answer);
    // Check if the submitted answer matches the correct answer
    if (answerInput.value == answer - 1) {
        console.log(`${answerInput.value} is correct!`);
    } else {
        console.log(`${answerInput.value} is incorrect`);
    }
    // Generate a new question
    // generateNewQuestion();
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

