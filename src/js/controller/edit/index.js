const loadCreateRecipe = require("./loadCreateRecipe");
const loadAddOrEditStepInRecipe = require("./loadAddOrEditStepInRecipe");
const loadAddOrEditIngredientInRecipe = require("./loadAddOrEditIngredientInRecipe");
const loadEditTypeOfFoodInRecipe = require("./loadEditTypeOfFoodInRecipe");

function loadEditController() {
	loadCreateRecipe();
	loadAddOrEditStepInRecipe();
	loadAddOrEditIngredientInRecipe();
	loadEditTypeOfFoodInRecipe();
}

module.exports = loadEditController;
