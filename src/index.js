import { gameOptionsArray } from "./gameOptions.js";

document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".game-option-card");
    const totalSlides = gameOptionsArray.length;
    let currentIndex = 0;
    let touchStartX = 0;
    const width = innerWidth;
    const sliderMove = innerWidth / totalSlides;
    let gameMode;
    
    const gameOptions = gameOptionsArray.map(function(option){
        if(option.title === "Sudden Death") {
            return `
            <div class="col game-option-card align-items-center py-8 px-8 gap-4 full-width">
                <img src="${option.icon}" type="svg" alt="Free Play icon">
                <h1>${option.title}</h1>
                <p class="white menu-desc pb-8">${option.description}</p>
                <a href="${option.link}" class="button btn-steel-grey min-w-8 justify-content-center btn-disabled" disabled>COMING SOON</a>
            </div>
        `
        } else {
        return `
            <div class="col game-option-card align-items-center py-8 px-8 gap-4 full-width">
                <img src="${option.icon}" type="svg" alt="Free Play icon">
                <h1>${option.title}</h1>
                <p class="white menu-desc pb-8">${option.description}</p>
                <a href="${option.link}" class="button btn-steel-grey min-w-8 justify-content-center">PLAY</a>
            </div>
        `
        }

    }).join('');
    const x = document.getElementById("game-option-wrapper").innerHTML = gameOptions;

    // Function to move slider to a specific card
    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const newPosition = currentIndex * (-100 / totalSlides);
        sliderWrapper.style.transform = `translateX(${newPosition}%)`;
    }

    // Touch event handling for swipe navigation
    if (sliderWrapper) {
        sliderWrapper.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
        });

        sliderWrapper.addEventListener('touchmove', (event) => {
            if (!touchStartX) {
                return;
            }

            const touchCurrentX = event.touches[0].clientX;
            const diffX = touchStartX - touchCurrentX;

            const gamePag1 = document.getElementById("game-pag1");
            const gamePag2 = document.getElementById("game-pag2");
            const gamePag3 = document.getElementById("game-pag3");

            if (diffX > 50) {
                // Swiped left (next)
                moveSlider(1);
                touchStartX = 0; // Reset touch start position
                if (gamePag1.classList.contains("active")) {
                    gamePag1.classList.remove("active");
                    gamePag2.classList.add("active");
                } else if (gamePag2.classList.contains("active")) {
                    gamePag2.classList.remove("active");
                    gamePag3.classList.add("active");
                } else {
                    gamePag3.classList.remove("active");
                    gamePag1.classList.add("active");
                }
            } else if (diffX < -50) {
                // Swiped right (previous)
                moveSlider(-1);
                touchStartX = 0; // Reset touch start position
                if (gamePag1.classList.contains("active")) {
                    gamePag1.classList.remove("active");
                    gamePag3.classList.add("active");
                } else if (gamePag3.classList.contains("active")) {
                    gamePag3.classList.remove("active");
                    gamePag2.classList.add("active");
                } else {
                    gamePag2.classList.remove("active");
                    gamePag1.classList.add("active");
                }
            }
        });
    };
});