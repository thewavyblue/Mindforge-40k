import { loadPage } from "./app.js";

document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".game-option-card");
    const totalSlides = slides.length;
    let currentIndex = 0;
    let touchStartX = 0;
    const width = innerWidth;
    const sliderMove = innerWidth / totalSlides;
    let gameMode;

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

    // Load page
    document.addEventListener("click", function(e) {
        if (e.target.dataset.button){
            e.target.innerHTML = `Loading <img class="load-animation" src="/imgs/Spinner@2x-1.0s-200px-200px-white.svg">`;
            
            let appPage = e.target.dataset.load + ".html";
            gameMode = e.target.dataset.button + ".html";
            
            console.log(`${e.target.dataset.button} clicked!`);

            // Load the app page
            window.location.href = appPage;

            console.log("loading page")
            // After app page loaded, load in second sub-page (setup game type)
            // window.addEventListener("DOMContentLoaded", function() {
            //     console.log("loading page");
            //     console.log("gameMode");
            //     loadPage(gameMode);
            // })
            
            // console.log(gameMode);
            
            // loadDestinationPage(appPage, gameMode);
            // console.log(gameMode);
        }
    });

    // function loadDestinationPage(appPage, gameMode) {
        
    //     // Specify the URL of the HTML page and the CSS file
    //     window.location.href = appPage;

    //     loadPage(gameMode);

    // }

});

// export function gameModeRequest() {
//     return gameMode;
// }