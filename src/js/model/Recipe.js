const Ingredient = require("./Ingredient");


/**
 * Creamos la clase receta.
 */
class Recipe {
	/**
	 * Recibe todos los parametros en el constructor.
	 * Controlamos el tipo de los parametros que pasamos al constructor,
	 * y si es de un tipo incorrecto al que queremos lanzamos una excepcion.
	 * Si es correcto, se setea el parámetro.
	 * @param idRecipe Integer
	 * @param name String
	 * @param ingredients Array[Ingredients]
	 * @param steps Array[Strings]
	 * @param typeOfFood String
	 * @param origin String
	 * @param idAuthor Integer
	 */
	constructor(idRecipe, name, ingredients, steps, typeOfFood, origin, idAuthor) {
		const datosInsuficinetes = "Datos insuficientes";
		// Controlamos dato idRecipe
		if (typeof idRecipe === typeof 1 && idRecipe > 0) {
			this.idRecipe = idRecipe;
		} else {
			throw new Error("El ID de la receta es inválido");
		}
		if (typeof name === typeof "") {
			this.name = name.trim();
		} else {
			throw new Error("El nombre de la receta es inválido");
		}
		// Controlamos dato ingredients
		// Tiene que ser un array  de 3 o más Ingredients
		if (ingredients instanceof Array) {
			if (ingredients.length >= 3) {
				for (let i = 0; i < ingredients.length; i += 1) {
					if (!(ingredients[i].ingredient instanceof Ingredient) || typeof ingredients[i].quantity !== typeof "") {
						throw new Error("Uno de los ingredientes es inválido");
					} if (ingredients[i].quantity.length <= 0) {
						throw new Error(datosInsuficinetes);
					}
				}
			} else {
				throw new Error(datosInsuficinetes);
			}
			this.ingredients = ingredients;
		} else {
			throw new Error("Los ingredientes de la receta son inválidos");
		}
		// Controlamos dato steps
		// Tiene que ser una rray de 5 o más cadenas
		if (steps instanceof Array) {
			if (steps.length > 4) {
				for (let i = 0; i < steps.length; i += 1) {
					if (typeof steps[i] !== typeof "") {
						throw new Error("Uno de los pasos es inválido");
					}
				}
			} else {
				throw new Error(datosInsuficinetes);
			}
			this.steps = steps;
		} else {
			throw new Error("Los pasos son inválidos");
		}
		// Controlamos dato typeOfFood
		if (typeof typeOfFood === typeof "") {
			this.typeOfFood = typeOfFood.trim();
		} else {
			throw new Error("El tipo de comida es inválido");
		}
		// Controlamos dato origin
		if (typeof origin === typeof "") {
			this.origin = origin.trim();
		} else {
			throw new Error("El origen es inválido");
		}
		// Controlamos dato idAuthor
		if (typeof idAuthor === typeof 1 && idAuthor > 0) {
			this.idAuthor = idAuthor;
		} else {
			throw new Error("El ID del autor es inválido");
		}
	}
}

module.exports = Recipe;
