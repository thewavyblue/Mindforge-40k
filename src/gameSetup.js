//define selectors
const armySelector = document.getElementById("army-select");
const categorySelector = document.getElementById("category-select");
const btnStart = document.getElementById("btn-start");

// let armySelectionValue;
let categorySelectionValue;
let armySelectionKey;

function loadCategorySelectorOptions(){

    fetch("/json/categorySelection.json")
    .then(response => response.json())
    .then(categorySelection => {
        
        // console.log(categoryData);
        let categorySelectionData = categorySelection.category;
        
        for (const key in categorySelectionData) {
            if (categorySelectionData.hasOwnProperty(key)) {
                const category = categorySelectionData[key];
                const option = document.createElement("option");
                option.text = category;
                option.value = key; // Set the key to the key
                categorySelector.appendChild(option);
                
                if (key !== "units"){
                    option.disabled = "true";
                }
            }
        }
    });
}

function loadArmySelectorOptions(){

    fetch("./json/armySelection.json")
    .then(response => response.json())
    .then(armySelection => {
        
        let armySelectionData = armySelection.armyName;
        
        for (const key in armySelectionData) {
            if (armySelectionData.hasOwnProperty(key)) {
                const army = armySelectionData[key];
                const option = document.createElement("option");
                option.text = army;
                option.value = key; // Set the key to the key
                armySelector.appendChild(option);
                if (key !== "tau" && key !== "adeptas-sororitas" && key !== "astra-militarum"){
                    option.disabled = "true";
                }
            }
        }
    });
}

document.getElementById("game-options").addEventListener('input', () => {
    
    if (armySelector.value !== 'select' && categorySelector.value !== 'select') {
        
        btnStart.disabled = false;
        btnStart.classList.remove("btn-disabled");
        console.log(armySelector.value);

        btnStart.addEventListener("click", () => {
            // e.preventDefault();
            armySelectionKey = armySelector.options[armySelector.selectedIndex].value; // Get the value of the selected option
            categorySelectionValue = categorySelector.value;
            console.log(`Chosen army: ${armySelectionKey}\nChosen category: ${categorySelectionValue}`);
        
            sessionStorage.setItem("armyName", armySelectionKey);
            sessionStorage.setItem("category", categorySelectionValue);
        });

    } else {
        btnStart.disabled = true;
    }
});

loadArmySelectorOptions();

loadCategorySelectorOptions();

// const gameOptions = document.getElementById('game-options');

// gameOptions.addEventListener('submit', function(e){
//     // e.preventDefault();
//     const gameOptionsData = new FormData(gameOptions);
    
//     const armyName = gameOptionsData.get('army-select');
//     const category = gameOptionsData.get('category-select');

//     console.log(localStorage);

// })


// function loadPage(pageUrl) {
//     fetch(pageUrl)
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById("main").innerHTML = html;
//     })
//     .catch(error => console.error('Error loading page:', error));

//     // let scripts = document.querySelector("scripts");
//     const jsURLArray = ["/src/timer.js", "/src/timedMode.js"];

//     jsURLArray.forEach(jsScript => {
//         jsScript = document.createElement("script");
//         jsScript.src = jsScript;
//         jsScript.type = "module";
//         console.log(jsScript);
//         document.body.appendChild(jsScript);
//     });
// }
