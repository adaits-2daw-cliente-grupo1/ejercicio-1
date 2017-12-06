const { getState } = require("../../appState");
const getRatings = require("../../support/getRatings");


/**
 * Creamos la función que nos devolverá las recetas con mejor puntuación de cada tipo de comida.
 * @returns {Array} de recetas mejor valoradas por tipo de comida.
 */
function getHighestRatedRecipes() {
	// El array donde tenemos las recetas mejor valoradas
	const highestRatedRecipesForTypeOfFood = [];
	// Entero que nos marca la posición de la receta si ha sido encontrada o
	// -1 si no se ha encontrado.
	let encontrado;
	// Array de los ratings para la receta
	let rating;
	// Todas las recetas que tenemos en el estado
	const RECETAS = getState.recipes();
	// Recorremos las recetas
	for (let i = 0; i < RECETAS.length; i += 1) {
		// Buscamos una receta con el mismo tipo de comida en las recetas guardadas como mejores.
		encontrado = highestRatedRecipesForTypeOfFood
			.findIndex(x => x.typeOfFood === RECETAS[i].typeOfFood);
		// Si se ha encontrado, evaluamos si su score es mayor que el elemento actual guardado y,
		// si lo es, la sustituimos por la que tenemos guardada.
		if (encontrado >= 0) {
			rating = getRatings(highestRatedRecipesForTypeOfFood[encontrado])
				.sort((x, y) => x.score - y.score)[0];
			if (rating < RECETAS[i].getRating()) {
				highestRatedRecipesForTypeOfFood[encontrado] = RECETAS[i];
			}
		} else {
			// Si no se ha encontrado en nuestras recetas guardadas una receta con
			// el mismo tipo de comida, añadimos la receta a las mejores por tipo de comida
			highestRatedRecipesForTypeOfFood.push(RECETAS[i]);
		}
	}
	return highestRatedRecipesForTypeOfFood;
}

module.exports = getHighestRatedRecipes;
