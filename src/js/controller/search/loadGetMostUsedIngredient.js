const getMostUsedIngredient = require("../../pages/trivia/getMostUsedIngredient");
const recipeToDiv = require("../../support/recipeToDiv");
const ingredientToDiv = require("../../support/ingredientToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadGetMostUsedIngredient() {
	const button = qs("#search-most-used-ingredient-button");
	const input = qs("#search-most-used-ingredient-by-type-input");

	button.addEventListener("click", () => {
		const foodType = input.value.trim().replace(/\s{2,}/g, " ").toLowerCase();

		if (typeof foodType !== "string") {
			return;
		}

		const result = getMostUsedIngredient(foodType);


		// Borrar los resultados de una búsqueda anterior
		while (resultsDiv.firstChild) {
			resultsDiv.removeChild(resultsDiv.firstChild);
		}

		if (result.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsDiv.appendChild(p);
		} else {
			resultsDiv.appendChild(ingredientToDiv(result, foodType));
		}
	});
}

module.exports = loadGetMostUsedIngredient;
