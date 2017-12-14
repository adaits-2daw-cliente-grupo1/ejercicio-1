const getRecipesWithMostSteps = require("../../pages/trivia/getRecipesWithMostSteps");
const recipeToDiv = require("../../support/recipeToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadSearchRecipesWithMostSteps() {
	const button = qs("#search-recipes-with-most-steps-button");
	const input = qs("#search-by-foodType-input");

	button.addEventListener("click", () => {
		const foodType = input.value.trim().replace(/\s{2,}/g, " ").toLowerCase();

		if (typeof foodType !== "string") {
			return;
		}

		const results = getRecipesWithMostSteps(foodType);


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

module.exports = loadSearchRecipesWithMostSteps;
