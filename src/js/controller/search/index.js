const loadSearchByNameOrSteps = require("./loadSearchByNameOrSteps");
const loadSearchBySimilarRecipe = require("./loadSearchBySimilarRecipe");
const loadSearchByTypeOfFood = require("./loadSearchByTypeOfFood");
const loadSearchRecipesWithMostSteps = require("./loadSearchRecipesWithMostSteps");
const loadSearchByIngredient = require("./loadSearchByIngredient");

function loadSearchController() {
	loadSearchByNameOrSteps();
	loadSearchBySimilarRecipe();
	loadSearchByTypeOfFood();
	loadSearchRecipesWithMostSteps();
	loadSearchByIngredient();
}

module.exports = loadSearchController;
