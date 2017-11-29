// Dependencias del proyecto
const { getState } = require("../../appState");

function getHighestRatedRecipesByChef(idAuthor, typeOfFood = "") {
/**
 * Recogemos las recetas que tenemos
*/
	const recetas = getState().recipes;
	const recipesAuthor = [];
	let highestRatedRecipes = [];
	/**
	 * Añadimos al array recipesAuthor, aquellas recetas cuuyo idAuthor sea el mismo
	 * que hemos recibido.
	 */
	for (let i = 0; i < recetas.length; i += 1) {
		if (recetas[i].idAuthor === idAuthor) {
			recipesAuthor.push(recetas[i]);
		}
	}
	/**
	 * Si la longitud de typeOfFood es mayor que 0, entonces realizamos un filtro para obtener
	 * las recetas de ese tipo de comida y luego ordenamos esas recetas por mejor puntuación
	 * y hacemos un slice para mostrar las 10 primeras.
	 */
	if (typeOfFood.length > 0) {
		highestRatedRecipes = recipesAuthor.filter(x => x.typeOfFood.toLowerCase()
			.includes(typeOfFood.toLowerCase()))
			.sort((x, y) => x.score < y.score).slice(0, 11);
		/**
		 * Si typeOfFood no tiene una longitud mayor que 0, entonces ordenamos todas las recetas
		 * del chef por mejor puntuación y hacemos un slice para mostrar las 10 primeras.
		 */
	} else {
		highestRatedRecipes = recipesAuthor.sort((x, y) => x.score < y.score).slice(0, 11);
	}
	/**
	 * Devolvemos las recetas con mejor puntuación.
	 */
	return highestRatedRecipes;
}

module.exports = getHighestRatedRecipesByChef;
