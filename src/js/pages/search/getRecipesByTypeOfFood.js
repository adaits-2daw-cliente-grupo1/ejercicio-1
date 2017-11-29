// Dependencias del proyecto
const { getState } = require("../../appState");

/**
 * Función que buscará todas las recetas que contengan el mismo tipo de comida
 * que hemos introducido.
 * @param typeOfFood
 */
function getRecipesByTypeOfFood(typeOfFood) {
	/**
	 * Recogemos las recetas que tenemos.
	 */
	const recetas = getState().recipes;
	/**
	 * Filtramos las recetas para obtener aquellas que coincidan con el tipo
	 * de comida introducido.
	 */
	return recetas.filter(x => x.typeOfFood.toLowerCase().includes(typeOfFood.toLowerCase()));
}
module.exports = getRecipesByTypeOfFood;
