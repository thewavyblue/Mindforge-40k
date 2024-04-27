
//define selectors
const armySelector = document.getElementById("army-select");
const categorySelector = document.getElementById("category-select");
const btnStart = document.getElementById("btn-start");

export let armySelectionValue;
export let categorySelectionValue;
export let armySelectionKey;

//import functions

// Fetch and process army data

function loadCategorySelectorOptions(){
    
    fetch("/json/categorySelection.json")
    .then(response => response.json())
    .then(categoryData => {
        
        console.log(categoryData);
        
        let categorySelectionData = categoryData;
        let categories = categorySelectionData.category;
        
        categories.forEach((category) => {
            const option = document.createElement("option");
            // option.value = category.value;
            option.text = category;
            categorySelector.appendChild(option);
        });
    });
}

// function loadArmySelectorOptions(){
    
//     fetch("./json/armySelection.json")
//     .then(response => response.json())
//     .then(armySelection => {
        
//         // console.log(armySelection);
//         let armySelectionData = Object.values(armySelection.armyName);
        
//         armySelectionData.forEach((army) => {
//             const option = document.createElement("option");
//             option.text = army;
//             armySelector.appendChild(option);
//         });
//     });
// }

function loadArmySelectorOptions(){
    fetch("./json/armySelection.json")
    .then(response => response.json())
    .then(armySelection => {
        let armySelectionData = armySelection.armyName;
        
        for (const value in armySelectionData) {
            if (armySelectionData.hasOwnProperty(value)) {
                const army = armySelectionData[value];
                const option = document.createElement("option");
                option.text = army;
                option.value = value; // Set the value to the key
                armySelector.appendChild(option);
            }
        }
    });
}

loadArmySelectorOptions();

loadCategorySelectorOptions();

btnStart.addEventListener("click", function(e) {
    e.preventDefault();
    armySelectionKey = armySelector.options[armySelector.selectedIndex].value; // Get the value of the selected option
    categorySelectionValue = categorySelector.value;
    console.log(`Chosen army: ${armySelectionKey}\nChosen category: ${categorySelectionValue}`);
    // localStorage.setItem("selectedArmy", armySelectionValue);
    // btnStart.removeEventListener();
});

// btnStart.addEventListener("click", function(e) {
//     e.preventDefault();
//     armySelectionValue = armySelector.value;
//     armySelectionKey = 
//     categorySelectionValue = categorySelector.value;
//     console.log(`Chosen army: ${armySelectionValue}\nArmy key: ${armySelectionKey}\nChosen category: ${categorySelectionValue}`);
//     // localStorage.setItem("selectedArmy", armySelectionValue);
//     // btnStart.removeEventListener();
// });

export function selectedArmy(army) {
    console.log(army);
}