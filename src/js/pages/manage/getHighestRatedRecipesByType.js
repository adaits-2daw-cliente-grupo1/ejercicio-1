const { getState } = require("../../appState");
const getRating = require("../../support/getRating");

function getHighestRatedRecipesByType() {
	const RECIPES = getState().recipes;
	const BEST_RECIPES = [];
	const recipeObject = { name: "", typeOfFood: "", rating: 0 };
	let encontrado;
	for (let i = 0; i < RECIPES.length; i += 1) {
		if (BEST_RECIPES.length > 0) {
			encontrado = BEST_RECIPES.findIndex(x => x.typeOfFood === RECIPES[i].typeOfFood);
			if (encontrado >= 0 && getRating(BEST_RECIPES[encontrado].rating) > getRating(RECIPES[i])) {
				recipeObject.name = RECIPES[i].name;
				recipeObject.rating = getRating(RECIPES[i]);
				BEST_RECIPES[encontrado] = recipeObject;
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
