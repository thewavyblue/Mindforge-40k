document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".game-option-card");
    const totalSlides = slides.length;
    let currentIndex = 0;
    let touchStartX = 0;
    const width = innerWidth;
    const sliderMove = innerWidth / totalSlides;

    // Function to move slider to a specific slide
    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const newPosition = currentIndex * (-100 / totalSlides);
        sliderWrapper.style.transform = `translateX(${newPosition}%)`;
    }

    // Touch event handling for swipe navigation
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

    // Button loader icon

    const btnSetupFreePlay = document.getElementById("btn-setup-free-play");
    const btnSetupTimedMode = document.getElementById("btn-setup-timed-mode");
    const btnSetupSuddenDeath = document.getElementById(
        "btn-setup-sudden-death"
    );

    if (btnSetupFreePlay) {
        btnSetupFreePlay.addEventListener("click", () => {
            btnSetupFreePlay.innerHTML += ` <img class="load-animation" src="/imgs/Spinner@2x-1.0s-200px-200px-white.svg">`;
            console.log("clicked!");
        });
    }



});
