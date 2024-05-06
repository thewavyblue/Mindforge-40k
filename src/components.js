let head = document.querySelector("head");
let indexMasthead = document.getElementById("index-masthead");
let masthead = document.getElementById("masthead");
let backButton = document.getElementById("back-button");
let footer = document.querySelector("footer");

if (head) {
    head.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mindforge 40k – A Warhammer 40k memory training app</title>
        <link rel="stylesheet" href="reset.css">
        <link rel="stylesheet" href="styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700;800;900&family=Teko:wght@500;600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700;800;900&family=Teko:wght@500;600&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="180x180" href="/imgs/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/imgs/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/imgs/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
    `;
}

if (indexMasthead) {
    indexMasthead.innerHTML = `
        <div class="col align-items-center py-8 gap-4">
            <img class="logo-main-menu" src="/imgs/mindforge40k-logo-white.svg" alt="Mindforge 40k logo">
            <p class="p-sm white">
                A Warhammer 40k mind-training app
            </p>
        </div>
    `;
}

if (masthead) {
    masthead.innerHTML = `
        <a href="/index.html" class="col place-content-center navbar">
            <img class="logo" src="/imgs/mindforge40k-logo-white.svg" alt="Mindforge 40k logo">
        </a>
    `;
}

if (backButton) {
    backButton.innerHTML = `
        <div class="col pb-4">
            <a class="row gap-2 px-4" href="/index.html" id="go-back-link">
                <img class="inline-block" src="/imgs/arrow-back.svg" alt="">
                <p class="dark-grey-2 p-sm inline-block">Go back</p>
            </a>
        </div>
    `;
}

if (footer) {
    footer.innerHTML = `
        <p class="dark-grey-2 p-sm">Developed with <span class="red">♥</span> by <a href="https://benhoath.com" target="_blank" rel="noreferrer noopener">Ben Hoath</a> • 2024</p>
    `;
}
