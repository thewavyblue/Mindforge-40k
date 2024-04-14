// Timer is used to count down from X

// Set the interval for the timer in milliseconds
const interval = 1000; // 1000 milliseconds = 1 second

// Initialize a counter
let timerCount = 6;

// Function to be executed at each interval
export function timerTick() {
    timerCount--;
    if (timerCount < 0) {
        timerCount = 0;
    }
    console.log(`Timer tick ${timerCount}`);
    return timerCount;
    // You can add any other actions here that should happen on each tick
}

// Start the timer
// let timeCountDown = setInterval(timerTick, interval);