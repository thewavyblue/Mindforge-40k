//import objects from external 
import { armyStats } from "./armyStats.js";
import { questions } from "./questions.js";
import { timerTick, interval, timerCount } from "./timer.js";

// Get DOM elements
const questionLabel = document.getElementById("question-label");
const unitName = document.getElementById("unit-name");
const answerInput = document.getElementById("input-answer");
const btnSubmit = document.getElementById("btn-submit");
const btnSkip = document.getElementById("btn-skip");
const scoreMessage = document.getElementById("score-message");
const loadedArmy = document.getElementById("loaded-army");
let scoreDisplay = document.getElementById("score-tracker");
let questionsTotal = document.getElementById("questions-total");
export let questionCounter;
export let score;
export let timerDisplay = document.getElementById("timer");
export let timerInterval;
timerDisplay.innerText = timerCount;

// Event listener for submit button
btnSubmit.addEventListener("click", submitAnswer);
document.addEventListener("keypress", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode == 13) {
        submitAnswer();
    }
});

// Event listener for skip button
btnSkip.addEventListener("click", skipQuestion);

function init() {
    loadedArmy.innerHTML = `Current army: <strong>${armyStats.armyName}</strong>`;
    questionCounter = 0;
    questionsTotal = questionCounter;
    score = 0;
    scoreDisplay = score;

    // timer conditions
    timerInterval = setInterval(timerTick, interval); // Start the timer
    generateNewQuestion(); // Generate initial question when the page loads
}

// Function to randomly select a unit and its stats
function selectRandomUnit(unit) {
    // Get keys of the units
    const unitKeys = Object.keys(unit).filter(key => key.startsWith('unit'));
    // Randomly select a unit key
    const randomUnitKey = unitKeys[Math.floor(Math.random() * unitKeys.length)];
    // Get the selected unit object
    const selectedUnit = unit[randomUnitKey];
    // Return the selected unit and its stats
    return {
        unitName: selectedUnit.unitName,
        stats: selectedUnit.stats
    };
}

// Set up the question
// Create a random number based on the length of the stats array
function randomNum() {
    return Math.floor(Math.random() * 7);
}
// Keep track of the index of the current question
let questionIndex = randomNum();
let randomUnit;

// Function to generate a new question
function generateNewQuestion() {
    // Generate a new unit
    randomUnit = selectRandomUnit(armyStats); // Assign the random unit to a global variable
    // Update the question index
    questionIndex = randomNum();
    // Get the question text from the questions array
    const question = Object.values(questions)[questionIndex];
    // Display the new question
    questionLabel.innerHTML = `${question}`;
    // Display the unit name
    unitName.innerHTML = `${randomUnit.unitName}`;
    
    console.log("Randomly selected unit:", randomUnit.unitName);
    console.log("Corresponding stats:", randomUnit.stats);
}

// Function to handle answer submission
function submitAnswer() {
    // Get the answer corresponding to the current question index
    const answer = Object.values(randomUnit.stats)[questionIndex];
    // Check if the submitted answer matches the correct answer
    if (answerInput.value == answer) {
        scoreMessage.innerHTML = `${answerInput.value} is correct!`;
        score++;
    } else {
        scoreMessage.innerHTML = `Incorrect. The answer is ${answer}.`;  
    }

    setTimeout(() => {
        // Update score
        updateScore();
        updateQuestionCounter();
        clearScoreMessage();
        generateNewQuestion();
    }, 1000);

    // Clear score message and input value
    clearInputValue();
    // Generate a new question
    
}

// Function to handle skipping a question
function skipQuestion() {
    scoreMessage.innerHTML = "Question skipped";
        setTimeout(() => {
            clearScoreMessage();
            generateNewQuestion();
        }, 1000);
    // Clear input value
    clearInputValue();
    // Update question counter
    updateQuestionCounter();
}

function updateQuestionCounter() {
    questionCounter++;
    // questionsTotal.innerHTML = questionCounter; 
}

function updateScore() {
    // scoreDisplay.innerHTML = score;
}

function clearScoreMessage() {
    scoreMessage.innerHTML = "";
}

function clearInputValue() {
    answerInput.value = "";
}

init();