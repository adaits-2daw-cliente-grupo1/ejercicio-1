// Dependencias del proyecto
const { getState } = require("../../appState");

function getRecipesWithMostSteps(foodType) {
	const recetas = getState().recipes;
	const sortedRecipes = recetas.sort((x, y) => x.steps.length < y.steps.length);

	const result = [];
	if (foodType === "") {
		for (let i = 0; i < sortedRecipes.length && i < 10; i += 1) {
			result.push(sortedRecipes[i]);
		}
	} else {
		const sortedByType = sortedRecipes.filter(x => x.typeOfFood.toLowerCase() === foodType);
		for (let i = 0; i < sortedByType.length; i += 1) {
			result.push(sortedByType[i]);
		}
	}

	return result;
}

module.exports = getRecipesWithMostSteps;

