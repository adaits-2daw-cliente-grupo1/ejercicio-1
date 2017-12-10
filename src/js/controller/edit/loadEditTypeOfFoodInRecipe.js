const editTypeOfFoodInRecipe = require("../../pages/edit/editTypeOfFoodInRecipe");
const recipeToDiv = require("../../support/recipeToDiv");
const { saveStateToStorage } = require("../../storage");
const { getState, editRecipeInState } = require("../../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadEditTypeOfFoodInRecipe() {
	const submit = qs("#edit-type-of-food-button");
	const inputRecipeId = qs("#edit-type-of-food-recipe-id");
	const inputNewValue = qs("#edit-type-of-food-new-value");

	submit.addEventListener("click", () => {
		const { recipes } = getState();

		const recipeId = +inputRecipeId.value;
		const newValue = inputNewValue.value.trim();

		const recipe = recipes.find(it => it.idRecipe === recipeId);

		if (!recipe) {
			alert("No existe ninguna receta con ese ID");
			return;
		}

		if (!newValue) {
			alert("Por favor, introduce un paso");
			return;
		}

		const newRecipe = editTypeOfFoodInRecipe(recipe, newValue);

		editRecipeInState(newRecipe);
		saveStateToStorage();

		while (resultsDiv.firstChild) {
			resultsDiv.removeChild(resultsDiv.firstChild);
		}

		resultsDiv.appendChild(recipeToDiv(newRecipe));
	});
}

module.exports = loadEditTypeOfFoodInRecipe;
