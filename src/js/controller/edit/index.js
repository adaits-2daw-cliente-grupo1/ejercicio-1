const loadCreateRecipe = require("./loadCreateRecipe");
const loadAddOrEditStepInRecipe = require("./loadAddOrEditStepInRecipe");
const loadAddOrEditIngredientInRecipe = require("./loadAddOrEditIngredientInRecipe");

function loadEditController() {
	loadCreateRecipe();
	loadAddOrEditStepInRecipe();
	loadAddOrEditIngredientInRecipe();
}

module.exports = loadEditController;
