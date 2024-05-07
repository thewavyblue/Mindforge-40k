//import objects from external
import { questions as unitQuestions } from "./unitQuestions.js";
// import { questions as weaponQuestions } from "./weaponQuestions.js";
import { timerTick, interval, timerCount } from "./timer.js";

// Get DOM elements
const unitName = document.getElementById("unit-name");
const answerInput = document.getElementById("input-answer");
const answerOutput = document.getElementById("output-answer");
const scoreMessage = document.getElementById("score-message");
const answerInputPath = document.getElementById("input-answer-path");
const inputSection = document.getElementById("input-section");
const selectedArmy = sessionStorage.getItem("armyName");
const selectedCategory = sessionStorage.getItem("category");
export let questionCounter;
export let score = 0;
export let timerDisplay = document.getElementById("timer");
export let timerInterval;
timerDisplay.innerText = timerCount;
let randomUnitArray;
let answer;
const questionsArrayLength = 7;
let prevQuestionMemory = null;

// BUTTONS //

document.getElementById("btn-submit").addEventListener("click", submitAnswer);

document.addEventListener("keypress", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode == 13) {
        submitAnswer(randomUnitArray);
    }
});

document.getElementById("btn-skip").addEventListener("click", skipQuestion);

function init() {
    // From sessionStorage:
    console.log(`Selected army: ${selectedArmy}\nSelected category: ${selectedCategory}`);

    fetchArmyStats(selectedArmy)
    .then(data => {
        generateNewQuestion(data);
    })
    .catch(error => {
        // Handle error loading data
        console.error('Error initializing:', error);
    });

    questionCounter = 0;
    score = 0;

    // Start the timer
    timerInterval = setInterval(timerTick, interval);
}

function fetchArmyStats(selectedArmy) {
    const selectedArmyAddr = "/json/" + selectedArmy + ".json";
    return fetch(selectedArmyAddr)
        .then(response => response.json())
        .then(data => {
            document.getElementById("loaded-army").innerHTML = `Current army: <strong>${data.armyName}</strong>`;
            
            // Assign the random unit array to the global variable
            randomUnitArray = data;
            return data;
        })
        .catch(error => {
            console.error('Error loading data:', error);
            throw error; // Rethrow the error to be caught by the caller
        }
    );
}

// Create a random number based on the length of the stats array to choose the question
function randomNum() {
    //! return Math.floor(Math.random() * questionsArrayLength);
    let randomNumValue;
    do {
        randomNumValue = Math.floor(Math.random() * questionsArrayLength);
    } while (randomNumValue === prevQuestionMemory);

    // Update the last generated number
    prevQuestionMemory = randomNumValue;

    return randomNumValue;
}

// Function to generate a new question
function generateNewQuestion(data) {
    
    const unitKeys = Object.keys(data)
    .filter(key => key.startsWith('unit'))
    .map((key) => key);
    
    // Randomly select a unit key
    const randomUnitKey = unitKeys[Math.floor(Math.random() * unitKeys.length)];
    //* console.log(`Randomly select a unit key (from selectRandomUnit):\n${randomUnitKey}`);  // i.e. unit12
    
    // Get the selected unit object. Return the selected unit and its stats
    const selectedUnit = data[randomUnitKey];
    //* console.log(`Get and return unit name (from selectRandomUnit):\n${selectedUnit.unitName}`); // i.e. Dialogus  

    // Update the question index
    const questionIndex = randomNum(); // i.e. 0 (this is question 1 from unitQuestions.js)    
    // if the same question is being asked as the previous question, generate a new question
    // if (questionIndex === prevQuestionMemory) {
    //     generateNewQuestion(randomUnitArray);
    // } else {
    //     prevQuestionMemory = questionIndex;
    //     console.log(`The previous qIndex: ${prevQuestionMemory}\nThe new qIndex: ${questionIndex}`);
    // }

    // Get the question text from the questions array
    const question = Object.values(unitQuestions)[questionIndex];
    //* console.log(question); // i.e IndexOf "How far can models in this unit <span class="question-emphasis">Move</span>?" = 1
    
    // Display the new question
    document.getElementById("question-label").innerHTML = question; // the above in a div

    // Display the unit name
    unitName.innerHTML = `${selectedUnit.unitName}`;

    // Function to get a random stat value from a random unit
    function getAnswer() {
        // Get the keys of the stats object
        const statKeys = Object.keys(selectedUnit.stats);
        //* console.log(statKeys);
        // Randomly select a stat key
        const randomStatValue = statKeys[questionIndex];
        //* console.log(randomStatValue);
        //* console.log(selectedUnit.stats[randomStatValue]);

        // if the value of the stat is 0, generate a new question.
        if(selectedUnit.stats[randomStatValue] === 0){
            generateNewQuestion(randomUnitArray);
        }

        return selectedUnit.stats[randomStatValue];
    }

    // The answer:
    answer = getAnswer();
    //* console.log(`the answer is:\n${answer}`);
}

// Function to handle answer submission
function submitAnswer() {

    // Default colour
    defaultColour();

    //! Get the answer corresponding to the current question index
    
    // Check if the submitted answer matches the correct answer
    if (answerInput.value == answer) {
        scoreMessage.innerHTML = `${answerInput.value} is correct!`;
        setGreen();
        answerOutput.innerText = answer;
        score++;
    } else {
        setRed();
        answerOutput.innerText = answer;
        scoreMessage.innerHTML = `Incorrect. The answer is ${answer}.`;  
    }

    setTimeout(() => {

        // Update score
        updateScore();
        updateQuestionCounter();
        clearScoreMessage();
        generateNewQuestion(randomUnitArray);
        clearInputValue();
        clearAnswerOutput();
    }, 1000);
}

// Function to handle skipping a question
function skipQuestion() {

    scoreMessage.innerHTML = "Question skipped";
        setTimeout(() => {
            clearScoreMessage();
            generateNewQuestion(randomUnitArray);
        }, 1000);

    // Clear input value
    clearInputValue();

    // Update question counter
    updateQuestionCounter();
}

function updateQuestionCounter() {
    questionCounter++;
}

function updateScore() {
    localStorage.setItem("finalScore", score);
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