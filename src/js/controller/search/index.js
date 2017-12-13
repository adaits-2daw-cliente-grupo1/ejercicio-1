const loadSearchByNameOrSteps = require("./loadSearchByNameOrSteps");
const loadSearchBySimilarRecipe = require("./loadSearchBySimilarRecipe");
const loadSearchByTypeOfFood = require("./loadSearchByTypeOfFood");
const loadSearchRecipesWithMostSteps = require("./loadSearchRecipesWithMostSteps");
const loadSearchByIngredient = require("./loadSearchByIngredient");
const loadGetMostUsedIngredient = require("./loadGetMostUsedIngredient");

function loadSearchController() {
	loadSearchByNameOrSteps();
	loadSearchBySimilarRecipe();
	loadSearchByTypeOfFood();
	loadSearchRecipesWithMostSteps();
	loadSearchByIngredient();
	loadGetMostUsedIngredient();
}

module.exports = loadSearchController;
