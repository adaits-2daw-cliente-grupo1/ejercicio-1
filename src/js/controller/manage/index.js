const loadGetHighestRatedRecipesByChef = require("./loadGetHighestRatedRecipesByChef");
const loadGetRecipesSortedByName = require("./loadGetRecipesSortedByName");
const loadGetRecipesSorted = require("./loadGetRecipesSorted");

function loadManageController() {
	loadGetHighestRatedRecipesByChef();
	loadGetRecipesSortedByName();
	loadGetRecipesSorted();
}

module.exports = loadManageController;
