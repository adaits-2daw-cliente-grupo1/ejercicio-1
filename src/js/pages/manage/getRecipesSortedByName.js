const { getState } = require("../../appState");


/**
 * La función nos devulvela receta más pesada, es decir,
 * la receta que cuya suma del peso de sus ingredientes sea la más pesada.
 * Todas las cantidades son tratadas como gramos.
 */
function getRecipesRecipesSortedByName() {
	const RECIPES = getState().recipes;
	RECIPES.sort((x, y) => x.name.toUpperCase() - y.name.toUpperCase());
	return RECIPES;
}

module.exports = getRecipesRecipesSortedByName;
