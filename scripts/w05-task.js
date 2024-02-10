/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create <article> element
        const articleElement = document.createElement("article");

        // Create <h3> element
        const h3Element = document.createElement("h3");
        // Add temple's templeName property to this new element
        h3Element.textContent = temple.templeName;

        // Create <img> element
        const imgElement = document.createElement("img");
        // Add temple's location property to the src attribute
        imgElement.src = temple.imageUrl;
        // Add temple's location property to the alt attribute
        imgElement.alt = temple.location;

        // Append the <h3> element and the <img> element to the <article> as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global templesElement varible
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();

    templeList = data;

    displayTemples(templeList);
};

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById("filtered").value;
    console.log("Filter selected:", filter);

    // Switch statement
    switch (filter) {
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            console.log("Utah Temples:", utahTemples);
            displayTemples(utahTemples);
            break;
        case "notutah":
            let notutahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            console.log("Not Utah Temples", notutahTemples);
            displayTemples(notutahTemples);
            break;
        case "older":
            let olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            console.log("Older Temples", olderTemples);
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
