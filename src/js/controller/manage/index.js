const loadGetHighestRatedRecipesByChef = require("./loadGetHighestRatedRecipesByChef");
const loadGetRecipesSortedByName = require("./loadGetRecipesSortedByName");
const loadGetHighestRatedRecipesByType = require("./loadGetHighestRatedRecipesByType");

function loadManageController() {
	loadGetHighestRatedRecipesByChef();
	loadGetRecipesSortedByName();
	loadGetHighestRatedRecipesByType();
}

module.exports = loadManageController;
