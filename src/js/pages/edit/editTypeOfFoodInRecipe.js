const Recipe = require("../../model/Recipe");

/**
 * Función que devolverá el tipo de comida de una receta actualizado.
 * @param recipe
 * @param newTypeOfFood
 * @returns {Recipe}
 */
function editTypeOfFoodInRecipe(recipe, newTypeOfFood) {
	const tipoDatoInvalido = "Tipo de dato invalido";
	/**
	 * Clonamos la receta para no modificar la original
	 * @type {Recipe}
	 */
	const newRecipe = new Recipe(
		recipe.idRecipe,
		recipe.name,
		[...recipe.ingredients],
		[...recipe.steps],
		recipe.typeOfFood,
		recipe.origin,
		recipe.idAuthor
	);
	/**
	 * Comprobamos que lo que pasamos por parámetro sea un String.
	 */
	if (typeof newTypeOfFood !== typeof "") {
		throw new Error(tipoDatoInvalido);
	}
	/**
	 * Actualizamos typeOfFood por newTypeOfFood.
	 */
	newRecipe.typeOfFood = newTypeOfFood;
	/**
	 * Devolvemos la receta actualizada.
	 */
	return newRecipe;
}

module.exports = editTypeOfFoodInRecipe;
