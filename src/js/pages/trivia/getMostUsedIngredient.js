// Dependencias del proyecto
const { getState } = require("../../appState");

function getMostUsedIngredient(foodType = "") {
	const recetas = getState().recipes;
	const ingredientes = [];
	let result;

	if (foodType === "") {
		// Recorre las recetas para almacenar todos los ingredientes en un array.
		recetas.forEach(recipe => recipe.ingredients
			.forEach(ingrediente => ingredientes.push(ingrediente.ingredient.name.trim().toLowerCase())));
	} else {
		const recetasPorTipo
			= recetas.filter(recipe => recipe.typeOfFood.trim().toLowerCase() === foodType);
		// Recorre las recetas del tipo especificado para almacenar todos los
		// ingredientes en un array.
		recetasPorTipo.forEach(recipe => recipe.ingredients
			.forEach(ingrediente => ingredientes.push(ingrediente.ingredient.name.trim().toLowerCase())));
	}

	const frequency = {};
	let max = 0; // holds the max frequency.
	// Recorre el array de ingredientes para comprobar cual es el que mas se
	// repite
	if (ingredientes.length > 0) {
		for (let i = 0; i < ingredientes.length; i += 1) {
			frequency[ingredientes[i]] = (frequency[ingredientes[i]] || 0) + 1;
			if (frequency[ingredientes[i]] > max) {
				max = frequency[ingredientes[i]];
				result = ingredientes[i];
			}
		}
	} else {
		result = "";
	}

	return result;
}

module.exports = getMostUsedIngredient;
