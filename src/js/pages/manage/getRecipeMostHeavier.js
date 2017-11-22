const { getState } = require("../../appState");
const Recipe = require("../../model/Recipe");


/**
 * La función nos devulvela receta más pesada, es decir,
 * la receta que cuya suma del peso de sus ingredientes sea la más pesada.
 * Todas las cantidades son tratadas como gramos.
 */
function getRecipeMostHeavier() {
	const RECIPES = getState().recipes;
	let MOST_HEAVIER;
	const TOTAL_CUANTIY = 0;
	let actualQuantity = 0;
	const REG_EXP = /(\d*(\d))/;
	RECIPES.forEach(i => i.ingredients);
}
