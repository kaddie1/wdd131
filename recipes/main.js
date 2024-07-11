// I used Chatgpt to assist me with my code
//The TA assisted me also

// Import in the list of recipes from recipes.mjs into main.js

// main.js

import recipes from './recipes.mjs';


function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}


// tag templates

function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<button class="dessert">${tag}</button>`;
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






function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="image of ${recipe.name}" />
	<figcaption>
     
		<ul class="recipe__tags">
			${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="${recipe.url}">${recipe.name}</a></h2>
		<p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
       
</figcaption>
</figure>`;
}




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
        outputElement.innerHTML=recipeHTML;
    });
}





// Assuming recipes is a predefined array of recipe objects

// Function to filter recipes based on a query
function filter(query) {
    // Filter recipes based on the query
    const filtered = recipes.filter(recipe => {
        // Assuming you want to filter based on recipe title
        return recipe.name.toLowerCase().includes(query.toLowerCase());
    });

    // Sort the filtered array by recipe name (title)
    const sorted = filtered.sort((a, b) => {
        // Assuming sorting alphabetically by title
        return a.name.localeCompare(b.name);
    });

    return sorted;
}


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


function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
  }
  init();