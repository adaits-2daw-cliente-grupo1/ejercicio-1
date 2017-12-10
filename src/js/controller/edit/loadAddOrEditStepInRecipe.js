const addOrEditStepInRecipe = require("../../pages/edit/addOrEditStepInRecipe");
const recipeToDiv = require("../../support/recipeToDiv");
const { saveStateToStorage } = require("../../storage");
const { getState, editRecipeInState } = require("../../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadAddOrEditStepInRecipe() {
	const submit = qs("#add-step-button");
	const inputRecipeId = qs("#add-step-recipe-id");
	const inputStep = qs("#add-step-step");
	const inputExistingStepNumber = qs("#add-step-existing-step-number");

	submit.addEventListener("click", () => {
		const { recipes } = getState();

		const recipeId = +inputRecipeId.value;
		const step = inputStep.value.trim();
		const existingStepNumber = +inputExistingStepNumber.value;

		const recipe = recipes.find(it => it.idRecipe === recipeId);

		if (!recipe) {
			alert("No existe ninguna receta con ese ID");
			return;
		}

		if (!step) {
			alert("Por favor, introduce un paso");
			return;
		}

		const newRecipe = addOrEditStepInRecipe(
			recipe,
			step,
			existingStepNumber ? existingStepNumber - 1 : undefined
		);

		editRecipeInState(newRecipe);
		saveStateToStorage();

		while (resultsDiv.firstChild) {
			resultsDiv.removeChild(resultsDiv.firstChild);
		}

		resultsDiv.appendChild(recipeToDiv(newRecipe));
	});
}

module.exports = loadAddOrEditStepInRecipe;
