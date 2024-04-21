const quotes = [
    {
        text: "It’s amazing how much paperwork an act of heroism requires.",
        credit: "Ciaphas Cain"
    },
    {
        text: "No pity! No remorse! No fear!",
        credit: "Chaplain Grimaldus"
    },
    {
        text: "Let the galaxy burn!",
        credit: "Abaddon the Despoiler"
    },
    {
        text: "Kill! Maim! Burn!",
        credit: "Khârn the Betrayer"
    },
    {
        text: "The most dangerous weapon is the one no one expects.",
        credit: "Inquisitor Gregor Eisenhorn"
    },
    {
        text: "There is no art more beautiful and diverse as the art of death.",
        credit: "Farseer Macha"
    },
    {
        text: "To be a man in such times is to be one amongst untold billions. It is to live in the cruellest and most bloody regime imaginable.",
        credit: "Narrator"
    },
    {
        text: "I’m da hand of Gork and Mork, dey sent me to make war!",
        credit: "Ghazghkull Mag Uruk Thraka"
    },
    {
        text: "A mind without purpose will wander in dark places.",
        credit: "Ravenor"
    },
    {
        text: "Victory is achieved through mettle. Glory is achieved through metal.",
        credit: "Iron Hands Maxim"
    },
    {
        text: "A hero is no braver than an ordinary man, but he is brave five minutes longer.",
        credit: "Rogal Dorn"
    },
    {
        text: "They shall be my finest warriors, these men who give of themselves to me.",
        credit: "The Emperor of Mankind"
    },
    {
        text: "I have dug my grave in this place and I will either triumph or I will die!",
        credit: "Commissar Yarrick"
    },
    {
        text: "We do not fight for victory, but for the survival of our species.",
        credit: "Farseer Eldrad Ulthran"
    },
    {
        text: "Ruthlessness is the kindness of the wise.",
        credit: "Lord Solar Macharius"
    },
    {
        text: "A small mind is easily filled with faith.",
        credit: "Inquisitor Gideon Ravenor"
    },
    {
        text: "Only the insane have strength enough to prosper. Only those who prosper may truly judge what is sane.",
        credit: "Night Lords"
    },
    {
        text: "For those who seek perfection, there can be no rest on this side of the grave.",
        credit: "Adeptus Mechanicus Belief"
    },
    {
        text: "Beginning reform is beginning a revolution.",
        credit: "Inquisition Teaching"
    },
    {
        text: "Success is measured in blood, yours or your enemy´s.",
        credit: "Khorne Worshipper Saying"
    },
    {
        text: "The blood of martyrs is the seed of the Imperium.",
        credit: "Ecclesiarchy Saying"
    },
    {
        text: "Truth is Subjective.",
        credit: "Inquisition Maxim"
    },
    {
        text: "We are the Emperor’s angels of death, not his angels of mercy.",
        credit: "Blood Ravens Devastator Sergeant Avitus"
    },
    {
        text: "What I cannot crush with words, I will crush with the tanks of the Imperial Guard!",
        credit: "Lord Commander Solar Macharius"
    },
    {
        text: "I fear no evil, for I am fear incarnate!",
        credit: "Chaos Space Marines"
    },
    {
        text: "Embrace the Immaterium.",
        credit: "Chaos Sorcerer"
    },
    {
        text: "Victory is but a prelude to the next battle.",
        credit: "Space Marine Commander"
    },
    {
        text: "The enemy of my enemy is still my enemy.",
        credit: "Ork Units"
    },
    {
        text: "Flesh is weak!",
        credit: "Techmarine"
    },
];

const quote = document.getElementById("quote");
let randomNum = Math.floor(Math.random() * quotes.length);

quote.innerHTML = `
    <p class="white p-sm text-align-center pb-4">
        "${quotes[randomNum].text}"
    </p>
    <p class="white p-sm text-align-right italic">
        – ${quotes[randomNum].credit}
    </p>
`