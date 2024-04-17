export const components = [
    {
        freePlay: `<section class="row justify-content-center bg-dark">
        <div class="col align-items-center py-8 border-bottom gap-4">
            <img src="imgs/icon-free-play.svg" type="svg" alt="Free Play icon">
            <p class="white menu-desc">How many can you correctly guess?</p>
            <a href="/options-free-play.html"><button class="button btn-steel-grey" id="btnStartFreePlay">FREE PLAY</button></a>
        </div>
        </section>`,
    }]

export const body = document.querySelector("body");
export const header = document.querySelector("header");
header.append(`
<header class="row justify-content-center">
<a href="/index.html" class="col place-content-center navbar">
<img class="logo" src="/imgs/mindforge40k-logo-white.svg" alt="Mindforge 40k logo">
</a>
</header>
`)
body.appendChild(header);