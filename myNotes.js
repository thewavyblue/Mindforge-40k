// Create an array based on the armyStats 'stats' number entries
let unitsArr = Object.entries(armyStats.unit);
let statsArr = Object.entries(armyStats.unit.stats);

// Create a random number based on the length of the stats array
let randomUnitNum = Math.floor(Math.random() * unitsArr.length);
let randomStatNum = Math.floor(Math.random() * statsArr.length);

// Keep track of the index of the current question
let questionIndex = randomUnitNum[randomStatNum];

// Function to generate a new question
function generateNewQuestion() {
    // Generate a random number between 0 and statsArr.length
    let randomUnitNum = Math.floor(Math.random() * unitsArr.length);
    let randomStatNum = Math.floor(Math.random() * statsArr.length);
    // Update the question index
    questionIndex = randomUnitNum[randomStatNum];
    // Get the question text from the questions array
    const question = Object.values(questions)[0];
    // Display the new question
    questionLabel.innerHTML = question;
}