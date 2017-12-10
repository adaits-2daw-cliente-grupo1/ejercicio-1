const Ingredient = require("../../model/Ingredient");
const addOrEditIngredientInRecipe = require("../../pages/edit/addOrEditIngredientInRecipe");
const recipeToDiv = require("../../support/recipeToDiv");
const { saveStateToStorage } = require("../../storage");
const { getState, editRecipeInState } = require("../../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadAddOrEditIngredientInRecipe() {
	const submit = qs("#add-ingredient-button");
	const inputRecipeId = qs("#add-ingredient-recipe-id");
	const inputIngredientName = qs("#add-ingredient-name");
	const inputIngredientQuantity = qs("#add-ingredient-quantity");
	const inputExistingIngredientNumber = qs("#add-ingredient-existing-ingredient-number");

	submit.addEventListener("click", () => {
		const { recipes } = getState();

		const recipeId = +inputRecipeId.value;
		const ingredientName = inputIngredientName.value.trim();
		const ingredientQuantity = inputIngredientQuantity.value.trim();
		const existingIngredientNumber = +inputExistingIngredientNumber.value;

		const recipe = recipes.find(it => it.idRecipe === recipeId);

		if (!recipe) {
			alert("No existe ninguna receta con ese ID");
			return;
		}

		if (!ingredientName) {
			alert("Por favor, introduce un paso");
			return;
		}

		const newRecipe = addOrEditIngredientInRecipe(
			recipe,
			{
				ingredient: new Ingredient(1, ingredientName),
				quantity: ingredientQuantity
			},
			existingIngredientNumber ? existingIngredientNumber - 1 : undefined
		);

		editRecipeInState(newRecipe);
		saveStateToStorage();

		while (resultsDiv.firstChild) {
			resultsDiv.removeChild(resultsDiv.firstChild);
		}

		resultsDiv.appendChild(recipeToDiv(newRecipe));
	});
}

module.exports = loadAddOrEditIngredientInRecipe;
