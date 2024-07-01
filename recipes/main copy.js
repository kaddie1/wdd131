// I used Chatgpt to assist me with my code

// Import in the list of recipes from recipes.mjs into main.js

// main.js

import recipes from './recipes.mjs';

console.log('Imported Recipes:', recipes);

// To execute main.js, if you're using Node.js with ES Modules, you typically run:

// node --experimental-modules main.js



// Create a function to generate a random number >= 0 and < num

Math.floor(Math.random()*5) // will give a number 0-4



// import recipes from './recipes.js';

// function random(num) {
// 	return Math.floor(Math.random() * num);
// }

// function getRandomListEntry(list) {
// 	const listLength = list.length;
// 	const randomNum = random(listLength);
// 	return list[randomNum];
// }

// // to test
// console.log(getRandomListEntry(recipes));



function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="images/apple-crisp.jpg" alt="image of apple crisp on a plate" />
	<figcaption>
		<ul class="recipe__tags">
			<li>Dessert</li>
			<li>Fruit</li>
		</ul>
		<h2><a href="#">Apple Crisp</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</p>
		<p class="recipe__description">
			This apple crisp recipe is a simple yet delicious fall dessert
			that's great served warm with vanilla ice cream.
		</p>
</figcaption>
</figure>`;
}









// tag templates

function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span>`;
    });
    return html;
}




// rating templates
function ratingTemplate(rating) {
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    >`;

    // Loop through 1 to 5 to create star ratings
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '★'; // Filled star
        } else {
            html += '☆'; // Empty star
        }
    }

    // Closing span tag
    html += `</span>`;

    return html;
}




//to test to see if working
// const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));




//render recipes


function renderRecipes(recipeList) {
    // Get the element where we will output the recipes
    const outputElement = document.getElementById('recipe-container'); // Replace 'recipe-container' with your actual container ID or reference

    // Initialize an empty HTML string to store all recipe HTML
    let recipesHTML = '';

    // Loop through each recipe object in the recipeList
    recipeList.forEach(recipe => {
        // Use the recipeTemplate function (hypothetically defined elsewhere) to generate HTML for each recipe
        const recipeHTML = recipeTemplate(recipe); // Assuming recipeTemplate is a separate function

        // Append the generated HTML for this recipe to the recipesHTML string
        recipesHTML += recipeHTML;
    });
}




//INIT FUNCTION
// Assuming recipes is a predefined array of recipe objects

// Function to get a random entry from an array
function getRandomListEntry(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

// Function to initialize the page
function init() {
    // Get a random recipe from the recipes array
    const recipe = getRandomListEntry(recipes);

    // Render the random recipe using renderRecipes function
    renderRecipes([recipe]);
}

// Call init() to start the initialization process
init();



//function to filter

function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted

}



// Assuming recipes is a predefined array of recipe objects

// Function to filter recipes based on a query
function filter(query) {
    // Filter recipes based on the query
    const filtered = recipes.filter(recipe => {
        // Assuming you want to filter based on recipe title
        return recipe.title.toLowerCase().includes(query.toLowerCase());
    });

    // Sort the filtered array by recipe name (title)
    const sorted = filtered.sort((a, b) => {
        // Assuming sorting alphabetically by title
        return a.title.localeCompare(b.title);
    });

    return sorted;
}





// Function to render recipes
function renderRecipes(recipeList) {
    // Get the element where we will output the recipes
    const outputElement = document.getElementById('recipe-container'); // Replace with your actual container ID

    // Initialize an empty HTML string
    let recipesHTML = '';

    // Loop through each recipe object in the recipeList
    recipeList.forEach(recipe => {
        // Assuming there's a function recipeTemplate that generates HTML for each recipe
        const recipeHTML = recipeTemplate(recipe); // Replace with your actual function if defined

        // Append the generated HTML for this recipe to recipesHTML
        recipesHTML += recipeHTML;
    });

    // Set the generated HTML as the innerHTML of the output element
    outputElement.innerHTML = recipesHTML;
}

// Function to handle search form submission
function searchHandler(e) {
    e.preventDefault();

    // Get the search input element and its value
    const searchInput = document.getElementById('search-input'); // Replace with your actual input ID
    const searchQuery = searchInput.value.trim().toLowerCase();

    // Filter recipes based on the search query
    const filteredRecipes = filter(searchQuery);

    // Render the filtered list of recipes
    renderRecipes(filteredRecipes);
}

// Assuming you have an event listener attached to a form submission
const searchForm = document.getElementById('search-form'); // Replace with your actual form ID
searchForm.addEventListener('submit', searchHandler);