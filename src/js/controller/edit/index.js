const loadCreateRecipe = require("./loadCreateRecipe");
const loadAddOrEditStepInRecipe = require("./loadAddOrEditStepInRecipe");

function loadEditController() {
	loadCreateRecipe();
	loadAddOrEditStepInRecipe();
}

module.exports = loadEditController;
