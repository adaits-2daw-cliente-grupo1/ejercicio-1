const { getState } = require("../../appState");
const getRating = require("../../support/getRating");

/**
 * Buscamos las mejores recetas por cada tipo de comida.
 * @returns {Array} Object del nombre, rating y tipo de comida de las mejores
 * recetas.
 */
function getHighestRatedRecipesByType() {
	const RECIPES = getState().recipes;
	const BEST_RECIPES = [];
	const recipeObject = { name: "", typeOfFood: "", rating: 0 };
	let encontrado;
	// Recorremos las recetas
	for (let i = 0; i < RECIPES.length; i += 1) {
		// Si el tamaño del array de las mejores recetas es 0, la primera
		// receta es añadida a las mejores recetas
		if (BEST_RECIPES.length > 0) {
			// Buscamos si el tipo de comida de la receta actual en el bucle
			// existe en nuestro array de las mejores recetas.
			encontrado = BEST_RECIPES.findIndex(x => x.typeOfFood === RECIPES[i].typeOfFood);
			// Si existe evaluamos que su puntuación sea mayor. Si lo es,
			// sustituimos dicho objeto en el array de mejores recetas.
			// Si el tipo de comida no existe en las mejores recetas,
			// añadimos un nuevo objeto correspondiente a la receta actual
			if (encontrado >= 0) {
				if (BEST_RECIPES[encontrado].rating > getRating(RECIPES[i])) {
					recipeObject.name = RECIPES[i].name;
					recipeObject.rating = getRating(RECIPES[i]);
					BEST_RECIPES[encontrado] = recipeObject;
				}
			} else {
				recipeObject.name = RECIPES[i].name;
				recipeObject.typeOfFood = RECIPES[i].typeOfFood;
				recipeObject.rating = getRating(RECIPES[i]);
				BEST_RECIPES.push(recipeObject);
			}
		} else {
			recipeObject.name = RECIPES[i].name;
			recipeObject.typeOfFood = RECIPES[i].typeOfFood;
			recipeObject.rating = getRating(RECIPES[i]);
			BEST_RECIPES.push(recipeObject);
		}
	}
	return BEST_RECIPES;
}

module.exports = getHighestRatedRecipesByType;
