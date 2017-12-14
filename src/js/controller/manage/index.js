const loadGetHighestRatedRecipesByChef = require("./loadGetHighestRatedRecipesByChef");
const loadGetRecipesSortedByName = require("./loadGetRecipesSortedByName");

function loadManageController() {
	loadGetHighestRatedRecipesByChef();
	loadGetRecipesSortedByName();
}

module.exports = loadManageController;
