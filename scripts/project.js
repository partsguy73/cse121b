/* Declare and initialize global variables */
const charactersElement = document.querySelector("#characters"); // Selecting the element with id "characters"
let characterList = []; // Initializing an empty array to store character data

/* async displayCharacters Function */
const displayCharacters = (characters) => {
    // Iterate through each character object in the array
    characters.forEach(character => {
        // Create <article> element
        const articleElement = document.createElement("article");

        // Create <h3> element
        const h3Element = document.createElement("h3");
        // Determine display name based on gender
        let characterDisplayName = "";
        if (character.gender === "male") {
            characterDisplayName = `Mr. ${character.name}`;
        } else {
            characterDisplayName = `Mrs. ${character.name}`;
        }
        // Set the text content of <h3> element to the character's display name
        h3Element.textContent = characterDisplayName;

        // Create <img> element
        const imgElement = document.createElement("img");
        // Set src attribute to character's image URL
        imgElement.src = character.image;
        // Set alt attribute to character's actor name
        imgElement.alt = character.actor;

        // Append the <h3> element and the <img> element to the <article> as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global charactersElement variable
        charactersElement.appendChild(articleElement);
    });
};

// Async function to fetch character data
const getCharacters = async () => {
    // Fetch character data from API
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    // Convert response to JSON format
    const data = await response.json();

    // Filter out characters without images and store in characterList
    characterList = data.filter(character => character.image);

    // Display filtered character list
    displayCharacters(characterList);
};

// Function to reset charactersElement
function reset() {
    // Clear the contents of charactersElement
    charactersElement.innerHTML = "";
};

// Function to filter and display characters based on filter criteria
const filterCharacters = (characters) => {
    // Reset displayed characters
    reset()
    // Get selected filter value
    let filter = document.getElementById("filtered").value;

    let filteredValues = characters;

    // Apply filter based on selected option
    switch(filter) {
        case "students":
            filteredValues = characters.filter(character => character.hogwartsStudent);
            break;
        case "staff":
            filteredValues = characters.filter(character => character.hogwartsStaff);
            break;
        case "nonhuman":
            filteredValues = characters.filter(character => character.species !== "human");
            break;
    }
    // Display filtered characters
    displayCharacters(filteredValues);
};

// Event listener for filter change
document.querySelector("#filtered").addEventListener("change", () => { filterCharacters(characterList) });

// Fetch and display character data
getCharacters();
