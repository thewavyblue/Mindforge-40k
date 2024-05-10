const changeLog = document.getElementById("changelog");

import { changelogArray } from "./changelogArray.js";

function getChangelogContent() {
    let changelogContent = ``
    changelogArray.forEach(function(entry) {
        changelogContent += `
            <h2>
                ${entry.version}
            </h2>
            <p class="pb-8">
                ${entry.description}
            </p>
        `
    });
    return changelogContent;
}

changeLog.innerHTML += getChangelogContent();
console.log(getChangelogContent())
console.log(changeLog)