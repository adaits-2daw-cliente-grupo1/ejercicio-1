const getRecipesByIngredient = require("../../pages/search/getRecipesByIngredient");
const recipeToDiv = require("../../support/recipeToDiv");
const { getState } = require("../../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadSearchByIngredient() {
	const button = qs("#search-by-ingredient-name-button");
	const input = qs("#search-by-ingredient-name-input");

	button.addEventListener("click", () => {
		// Elimina espacios en blanco del nombre del ingrediente y lo pasa a
		// minusculas
		const ingredientName = input.value.trim().replace(/\s{2,}/g, " ").toLowerCase();
		const recetas = getState().recipes;
		let ingredient;
		// Recorre las recetas para comprobar si existe un ingrediente con
		// ese nombre
		for (let i = 0; i < recetas.length; i += 1) {
			for (let j = 0; j < recetas[i].ingredients.length; j += 1) {
				if (recetas[i].ingredients[j].ingredient.name.toLowerCase() === ingredientName) {
					ingredient = recetas[i].ingredients[j];
					break;
				}
			}
		}
		const results = getRecipesByIngredient(ingredient);

		// Borrar los resultados de una búsqueda anterior
		while (resultsDiv.firstChild) {
			resultsDiv.removeChild(resultsDiv.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsDiv.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsDiv.appendChild(it));
		}
	});
}

module.exports = loadSearchByIngredient;
