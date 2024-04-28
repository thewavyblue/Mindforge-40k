//import objects from external 
// import { armyStats } from "./armyStats.js";
import { questions } from "./questions.js";
import { timerTick, interval, timerCount } from "./timer.js";

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
const selectedArmy = sessionStorage.getItem("armyName");
const selectedCategory = sessionStorage.getItem("category");
export let questionCounter;
export let score = 0;
export let timerDisplay = document.getElementById("timer");
export let timerInterval;
// export let finalScore = document.getElementById("final-score");
timerDisplay.innerText = timerCount;
let questionIndex = randomNum();
let randomUnitArray;
let answer;

// BUTTONS //
btnSubmit.addEventListener("click", submitAnswer);
document.addEventListener("keypress", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode == 13) {
        submitAnswer();
    }
});

btnSkip.addEventListener("click", skipQuestion);

// import selectedArmy value
// console.log(selectedArmy + " @ timedMode.js");
const armySelectorValue = 0;

function init() {
    console.log(`${selectedArmy} ${selectedCategory}`);
    fetchArmyStats(selectedArmy)
        .then(data => {
            generateNewQuestion(data);
            // Other initialization code...
        })
        .catch(error => {
            // Handle error loading data
            console.error('Error initializing:', error);
        });
    
    questionCounter = 0;
    questionsTotal = questionCounter;
    score = 0;
    scoreDisplay = score;
    
    // timer conditions
    timerInterval = setInterval(timerTick, interval); // Start the timer
}

function fetchArmyStats(selectedArmy) {
    const selectedArmyAddr = "/json/" + selectedArmy + ".json";
    return fetch(selectedArmyAddr)
        .then(response => response.json())
        .then(data => {
            loadedArmy.innerHTML = `Current army: <strong>${data.armyName}</strong>`;
            // Assign the random unit array to the global variable
            randomUnitArray = selectRandomUnit(data);
            return data;
        })
        .catch(error => {
            console.error('Error loading data:', error);
            throw error; // Rethrow the error to be caught by the caller
        });
}

// console.log(randomUnitArray);

// Function to randomly select a unit and its stats
function selectRandomUnit(data) {
    // Get keys of the units
    const unitKeys = Object.keys(data).filter(key => key.startsWith('unit'));
    // Randomly select a unit key
    const randomUnitKey = unitKeys[Math.floor(Math.random() * unitKeys.length)];
    console.log(randomUnitKey);
    // Get the selected unit object
    const selectedUnit = data[randomUnitKey];
    // Return the selected unit and its stats
    console.log(selectedUnit.unitName);
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
function generateNewQuestion(data) {
    // Check if randomUnitArray is defined
    if (!randomUnitArray) {
        console.error('randomUnitArray is not defined');
        return;
    }
    
    // Generate a new unit by assigning the random unit to a global variable
    
    // randomUnitArray = selectRandomUnit(data);

    // Update the question index
    questionIndex = randomNum();
    // Get the question text from the questions array
    const question = Object.values(questions)[questionIndex];
    // Display the new question
    questionLabel.innerHTML = `${question}`;
    // Display the unit name
    unitName.innerHTML = `${randomUnitArray.unitName}`;
    
    console.log("Randomly selected unit:", randomUnitArray.unitName);
    console.log("Corresponding stats:", randomUnitArray.stats);
}

// Function to handle answer submission
function submitAnswer() {
    // Check if randomUnitArray is defined
    if (!randomUnitArray) {
        console.error('randomUnitArray is not defined');
        return;
    }
    // Default colour
    defaultColour();
    // Get the answer corresponding to the current question index
    answer = Object.values(randomUnitArray.stats)[questionIndex];
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
    // Check if randomUnitArray is defined
    if (!randomUnitArray) {
        console.error('randomUnitArray is not defined');
        return;
    }
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
    answerOutput.innerText = answer;
}

function updateQuestionCounter() {
    questionCounter++;
    // questionsTotal.innerHTML = questionCounter; 
}

function updateScore() {
    // scoreDisplay.innerHTML = score;
    localStorage.setItem("finalScore", score);
    // console.log(localStorage.finalScore);
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

export function playAgain() {
    location.reload();
}

init();