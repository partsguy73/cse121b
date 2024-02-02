/* LESSON 4 - Programming Tasks */
let photoElement = document.querySelector("#photo");
/* Profile Object  */
let myProfile = {
    /* Name */
    name: "Timothy Scott",
    /* Photo with attributes */
    photo: {
        src: "images/scott.png",
        alt: "My Profile Picture"
    },
    /* Favorite Foods List*/
    favoriteFoods: [
        "Steak",
        "Barbeque",
        "Taco",
        "Nachos",
        "Ice Cream"
    ],
    /* Hobbies List */
    hobbies: [
        "Singing",
        "Video Games",
        "Modeling",
        "Cruising"
    ],
    /* Places Lived List */
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Los Angeles, CA, USA",
        length: "6 years"
    },
    {
        place: "Saint George, UT, USA",
        length: "18 years"
    },
    {
        place: "Washington, UT, USA",
        length: "19 years"
    },
    {
        place: "Salt Lake City, UT, USA",
        length: "6 years"
    },
    {
        place: "Fort Sill, OK, USA",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */
/* Name Output */
document.querySelector("#name").textContent = myProfile.name;

/* Photo Output */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorlist Foods List */
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
const placesList = document.querySelector("#places-lived");

myProfile.placesLived.forEach(place => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;

    const dd = document.createElement("dd");
    dd.textContent = place.length;

    placesList.appendChild(dt);
    placesList.appendChild(dd); 
});








