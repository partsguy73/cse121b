/* Declare and initialize global variables */
const charactersElement = document.querySelector("#characters");
let characterList = [];

/* async displayCharacters Function */
const displayCharacters = (characters) => {
    characters.forEach(character => {
        // Create <article> element
        const articleElement = document.createElement("article");

        // Create <h3> element
        const h3Element = document.createElement("h3");
        // Add temple's templeName property to this new element
        h3Element.textContent = character.name;

        // Create <img> element
        const imgElement = document.createElement("img");
        // Add character's name property to the src attribute
        imgElement.src = character.image;
        // Add character's actor property to the alt attribute
        imgElement.alt = character.actor;

        // Append the <h3> element and the <img> element to the <article> as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global templesElement varible
        charactersElement.appendChild(articleElement);
    });
};

const getCharacters = async () => {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();

    characterList = data.filter(character => character.image);

    displayCharacters(characterList);
};

getCharacters();