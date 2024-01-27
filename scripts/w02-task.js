/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Timothy J. Scott";
const currentYear = new Date().getFullYear();
const profilePicture = "images/scott.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture); 
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);

/* Step 5 - Array */
let favoriteFood = ['Steak', 'Barbeque', 'Taco', 'Nachos', 'Mint-Chocolate Chip Ice Cream'];
//document.getElementById('food').innerHTML = favoriteFood
foodElement.innerHTML = favoriteFood;
let newFood = 'Burgers';
favoriteFood.push(newFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();   
foodElement.innerHTML += `<br>${favoriteFood}`;
