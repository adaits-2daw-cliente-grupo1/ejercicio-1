const loadSearchByNameOrSteps = require("./loadSearchByNameOrSteps");
const loadSearchBySimilarRecipe = require("./loadSearchBySimilarRecipe");
const loadSearchByTypeOfFood = require("./loadSearchByTypeOfFood");
const loadSearchRecipesWithMostSteps = require("./loadSearchRecipesWithMostSteps");
const loadSearchByIngredient = require("./loadSearchByIngredient");
const loadGetMostUsedIngredient = require("./loadGetMostUsedIngredient");
const loadSearchRecipesWithMostIngredients = require("./loadSearchRecipesWithMostIngredients");

function loadSearchController() {
	loadSearchByNameOrSteps();
	loadSearchBySimilarRecipe();
	loadSearchByTypeOfFood();
	loadSearchRecipesWithMostSteps();
	loadSearchByIngredient();
	loadGetMostUsedIngredient();
	loadSearchRecipesWithMostIngredients();
}

module.exports = loadSearchController;
