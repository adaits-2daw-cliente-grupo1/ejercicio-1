const Recipe = require("../../model/Recipe");

// La funcion debe de devolvernos una receta con un paso más o
// un paso actualizado en el caso de que el index pasado por parámetro exista.
function addOrEditStepInRecipe(recipe, newStep, existingStepIndex) {
	const tipoDatoInvalido = "Tipo de dato invalido";
	// Clonamos la receta para no modificar la original
	const newRecipe = new Recipe(
		recipe.idRecipe,
		recipe.name,
		[...recipe.ingredients],
		[...recipe.steps],
		recipe.typeOfFood,
		recipe.origin,
		recipe.idAuthor
	);
	// Comprobamos que lo que pasamos por parámetro sea un String
	if (typeof newStep !== typeof "") {
		throw new Error(tipoDatoInvalido);
	}
	// Comprobamos que el index pasado por parámetro sea un número o indefinido
	if (typeof existingStepIndex !== typeof 1 && existingStepIndex !== undefined) {
		throw new Error(tipoDatoInvalido);
	}
	// Si el index es indefinido o sea mayor o igual que el numero de pasos,
	// lo añadimos a la receta como un ingrediente más
	if (existingStepIndex === undefined || existingStepIndex >= newRecipe.steps.length) {
		newRecipe.steps.push(newStep);
	} else {
		// Si el index existe, actualizamos el ingrediente que corresponda a la posición indicada
		newRecipe.steps[existingStepIndex] = newStep;
	}
	// Devolvemos la receta actualizada.
	return newRecipe;
}

module.exports = addOrEditStepInRecipe;
