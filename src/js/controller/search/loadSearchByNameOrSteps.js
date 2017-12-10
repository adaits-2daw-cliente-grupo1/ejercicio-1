const getRecipesByNameOrSteps = require("../../pages/search/getRecipesByNameOrSteps");
const recipeToDiv = require("../../support/recipeToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadSearchByNameOrSteps() {
	const button = qs("#search-by-name-or-steps-button");
	const input = qs("#search-by-name-or-steps-input");

	button.addEventListener("click", () => {
		const searchText = input.value;

		if (typeof searchText !== "string" || searchText.length === 0) {
			return;
		}

		const results = getRecipesByNameOrSteps(searchText);

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

module.exports = loadSearchByNameOrSteps;
