//import objects from external 
import { armyStats } from "./src/armyStats.js";
import { questions } from "./src/questions.js";
import { timerTick, interval, timerCount } from "./src/timer.js";

// Get DOM elements
const questionLabel = document.getElementById("question-label");
const unitName = document.getElementById("unit-name");
const answerInput = document.getElementById("input-answer");
const answerOutput = document.getElementById("output-answer");
const btnSubmit = document.getElementById("btn-submit");
const btnSkip = document.getElementById("btn-skip");
const scoreMessage = document.getElementById("score-message");
const loadedArmy = document.getElementById("loaded-army");
let scoreDisplay = document.getElementById("score-tracker");
let questionsTotal = document.getElementById("questions-total");
const answerInputPath = document.getElementById("input-answer-path");
const inputSection = document.getElementById("input-section");
export let questionCounter;
export let score = 0;
export let timerDisplay = document.getElementById("timer");
export let timerInterval;
export let finalScore = document.getElementById("final-score");
timerDisplay.innerText = timerCount;
let questionIndex = randomNum();
let randomUnit;
let answer;

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
    // Default colour
    defaultColour();
    // Get the answer corresponding to the current question index
    answer = Object.values(randomUnit.stats)[questionIndex];
    // Check if the submitted answer matches the correct answer
    if (answerInput.value == answer) {
        scoreMessage.innerHTML = `${answerInput.value} is correct!`;
        setGreen();
        updateAnswerOutput();
        score++;
    } else {
        setRed();
        updateAnswerOutput();
        scoreMessage.innerHTML = `Incorrect. The answer is ${answer}.`;  
    }

    setTimeout(() => {
        // Update score
        updateScore();
        updateQuestionCounter();
        clearScoreMessage();
        generateNewQuestion();
        clearInputValue();
        clearAnswerOutput();
    }, 1000);
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

function updateAnswerOutput() {
    console.log("wrong answer!")
    answerOutput.innerText = answer;
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

function clearAnswerOutput() {
    answerOutput.innerText = "";
}

function setGreen() {
    // New colours
    answerInputPath.style.stroke = "#45B11F";
    inputSection.style.background = "#245B10";
    setTimeout(() => {
        // Default colours after 1sec
        defaultColour();
    }, 1000); 
}

function setRed() {
    // New colours
    answerInputPath.style.stroke = "#B11F1F";
    inputSection.style.background = "#5B1010";
    setTimeout(() => {
        // Default colours after 1sec
        defaultColour();
    }, 1000);
}

function defaultColour() {
    answerInputPath.style.stroke = "#4D778C";
    inputSection.style.background = "#333";
}

init();