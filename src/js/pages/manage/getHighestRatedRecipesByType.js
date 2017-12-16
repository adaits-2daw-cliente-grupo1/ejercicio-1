const { getState } = require("../../appState");
const getRatings = require("../../support/getRatings");

function getHigherRating(ratings) {
	return ratings.sort((a, b) => a.score - b.score)[0];
}

/**
 * Buscamos las mejores recetas por cada tipo de comida.
 * @returns {Array} Object del nombre, rating y tipo de comida de las mejores
 * recetas.
 */
function getHighestRatedRecipesByType() {
	const RECIPES = getState().recipes;
	let ratingRecipe;
	const BEST_RECIPES_BY_TYPE = [];
	const recipeObject = { name: "", typeOfFood: "", rating: 0 };
	let encontrado;

	// Recorremos las recetas
	for (let i = 0; i < RECIPES.length; i += 1) {
		// Si el tamaño del array de las mejores recetas es 0, la primera
		// receta es añadida a las mejores recetas
		if (BEST_RECIPES_BY_TYPE.length > 0) {
			// Buscamos si el tipo de comida de la receta actual en el bucle
			// existe en nuestro array de las mejores recetas.
			encontrado = BEST_RECIPES_BY_TYPE.findIndex(x => RECIPES[i].typeOfFood === x.typeOfFood);
			// Si existe evaluamos que su puntuación máxima sea mayor. Si lo es,
			// sustituimos dicho objeto en el array de mejores recetas.
			// Si el tipo de comida no existe en las mejores recetas,
			// añadimos un nuevo objeto correspondiente a la receta actual
			if (encontrado >= 0) {
				ratingRecipe = getHigherRating(getRatings(RECIPES[i]));
				ratingRecipe = typeof ratingRecipe !== typeof undefined ?
					ratingRecipe.score : undefined;
				if (typeof ratingRecipe !== typeof undefined &&
					BEST_RECIPES_BY_TYPE[encontrado].rating > ratingRecipe) {
					recipeObject.name = RECIPES[i].name;
					recipeObject.rating = ratingRecipe;
					BEST_RECIPES_BY_TYPE[encontrado] = Object.assign({}, recipeObject);
				}
			} else {
				ratingRecipe = getHigherRating(getRatings(RECIPES[i]));
				ratingRecipe = typeof ratingRecipe !== typeof undefined ?
					ratingRecipe.score : undefined;
				if (typeof ratingRecipe !== typeof undefined) {
					recipeObject.name = RECIPES[i].name;
					recipeObject.typeOfFood = RECIPES[i].typeOfFood;
					recipeObject.rating = ratingRecipe;
					BEST_RECIPES_BY_TYPE.push(Object.assign({}, recipeObject));
				}
			}
		} else {
			ratingRecipe = getHigherRating(getRatings(RECIPES[i]));
			ratingRecipe = typeof ratingRecipe !== typeof undefined ?
				ratingRecipe.score : undefined;
			if (typeof ratingRecipe !== typeof undefined) {
				recipeObject.name = RECIPES[i].name;
				recipeObject.typeOfFood = RECIPES[i].typeOfFood;
				recipeObject.rating = ratingRecipe;
				BEST_RECIPES_BY_TYPE.push(Object.assign({}, recipeObject));
			}
		}
	}
	return BEST_RECIPES_BY_TYPE;
}

module.exports = getHighestRatedRecipesByType;
