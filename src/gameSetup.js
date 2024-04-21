
//define selectors
const armySelector = document.getElementById("army-select");
const categorySelector = document.getElementById("category-select");
const btnStart = document.getElementById("btn-start");

export let armySelectionValue;
export let categorySelectionValue;

//import armyData from JSON

// Fetch and process army data


// Fetch and process category data
// fetch("/json/categorySelection.json")
//     .then(response => response.json())
//     .then(categoryData => {
//         loadSelectorOptions(categoryData, 'category');
//         console.log(categoryData);
//     });


// function loadSelectorOptions(categoryData, armyData){
//     let armySelectionData = armyData;
//     let armies = armySelectionData.armyName;

//     let categorySelectionData = categoryData;
//     let categories = categorySelectionData;
    
//     console.log(categoryData);

//     armies.forEach((army) => {
//         const option = document.createElement("option");
//         // option.value = army.value;
//         option.text = army;
//         armySelector.appendChild(option);
//     });

//     categories.forEach((category) => {
//         const option = document.createElement("option");
//         // option.value = army.value;
//         console.log(category);
//         option.text = category;
//         categorySelector.appendChild(option);
//     });
// }

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

function loadArmySelectorOptions(){
    
    fetch("/json/armySelection.json")
    .then(response => response.json())
    .then(armyData => {
        
        console.log(armyData);
        
        let armySelectionData = armyData;
        let armies = armySelectionData.armyName;
        
        armies.forEach((army) => {
            const option = document.createElement("option");
            // option.value = army.value;
            option.text = army;
            armySelector.appendChild(option);
        });
    });
}

loadArmySelectorOptions();

loadCategorySelectorOptions();

btnStart.addEventListener("click", function(e) {
    // e.preventDefault();
    armySelectionValue = armySelector.value;
    categorySelectionValue = categorySelector.value;
    console.log(value);
});


// function armySelection() {

// }

//user selects army using selector


// army loaded into variable


// fetch("/json/adeptasSororitas.json")
//     .then(response => response.json())
//     .then(armyData => console.log(armyData));
