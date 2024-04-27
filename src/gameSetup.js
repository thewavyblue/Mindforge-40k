//define selectors
const armySelector = document.getElementById("army-select");
const categorySelector = document.getElementById("category-select");
const btnStart = document.getElementById("btn-start");

export let armySelectionValue;
export let categorySelectionValue;
export let armySelectionKey;

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
                
                if (key !== "units" ){
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
                if (key !== "adeptas-sororitas"){
                    option.disabled = "true";
                }
            }
        }
    });
}

loadArmySelectorOptions();

loadCategorySelectorOptions();

btnStart.addEventListener("click", function(e) {
    // e.preventDefault();
    armySelectionKey = armySelector.options[armySelector.selectedIndex].value; // Get the value of the selected option
    categorySelectionValue = categorySelector.value;
    console.log(`Chosen army: ${armySelectionKey}\nChosen category: ${categorySelectionValue}`);
    // localStorage.setItem("selectedArmy", armySelectionValue);
    // btnStart.removeEventListener();
});

export function selectedArmy(army) {
    console.log(army);
}